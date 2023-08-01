const { userValidate } = require("../middleware/validation");
const UserModel = require("../models/user.models");
const createError = require("http-errors");

const register = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const { error } = userValidate(req.body);
    console.log(error);

    if (error) {
      throw createError(error.details[0].message);
    }
    const isExitsUser = await UserModel.findOne({
      email,
    });
    if (isExitsUser) {
      throw createError.Conflict(`${email} is ready been register`);
    }
    const newUser = new UserModel({
      firstName,
      lastName,
      email,
      password,
    });
    const savedUser = await newUser.save();
    console.log(savedUser);

    return res.json({
      status: 400,
      elements: savedUser,
    });
  } catch (error) {
    next(error);
  }
};
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const { error } = userValidate(req.body);
    console.log(error);
    if (error) {
      throw createError(error.details[0].message);
    }

    const user = await UserModel.findOne({ email });
    if (!user) {
      throw createError.NotFound("user dones't registe");
    }
    const checkedPassword = await user.isCheckPassword(password);
    if (!checkedPassword) {
      throw createError.Unauthorized();
    }
    return res.send(user);
  } catch (error) {
    next(error);
  }
};
module.exports = {
  register,
  login,
};
