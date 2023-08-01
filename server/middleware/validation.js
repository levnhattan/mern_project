const joi = require("joi");

const userValidate = (data) => {
  const userSchema = joi.object({
    email: joi
      .string()
      .email()
      //       .pattern(new RegExp("gmail.com$"))
      .lowercase()
      .required(),
    password: joi
      .string()
      .min(4)
      .max(32)
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .required(),
    firstName: joi.string().alphanum().min(3).max(30).required(),
    lastName: joi.string().alphanum().min(3).max(30).required(),
  });
  return userSchema.validate(data);
};

module.exports = {
  userValidate,
};
