const mongoose = require("mongoose");
const bcrypt = require('bcrypt')
require("dotenv").config();

const { userConnection } = require("../helpers/connection_mongodb");

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    lowercase: true,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

UserSchema.pre('save' , async function(next) {
  try {
    const salt = await bcrypt.genSalt(5);
    const hashPassword = await bcrypt.hash(this.password, salt);
    this.password = hashPassword
    next();
  } catch (error) {
    console.log(error)
    next(error)
  }
})
UserSchema.methods.isCheckPassword  = async function(password) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (error) {
    console.log(error)
  }
}
module.exports = userConnection.model("user", UserSchema);