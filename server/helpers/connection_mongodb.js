const mongoose = require("mongoose");
require("dotenv").config();

function newConnection(uri) {
  const conn = mongoose.createConnection(uri);
  conn.on("connected", function () {
    console.log(`mongodb::: connected::: ${this.name}`);
  });
  conn.on("disconnected", function () {
    console.log(`mongodb::: connected::: ${this.name}`);
  });
  conn.on("error", function (error) {
    console.log(`mongodb::: error::: ${JSON.stringify(error)}`);
  });
  return conn;
}

const userConnection = newConnection(process.env.URI_MONGODB_USERS);

module.exports = {
  userConnection,
};
