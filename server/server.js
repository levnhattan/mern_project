const express = require("express");
const app = express();
const createError = require("http-errors");
require("dotenv").config();

const userRoute = require('./routers/user.route');


const PORT = process.env.PORT || 3001;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("home page");
});
app.use('/user', userRoute)

// handle error
app.use((req, res, next) => {
  next(createError.NotFound("Not found!"));
});

app.use((err, req, res, next) => {
  res.json({
    error: err.status || 500,
    message: err.message
  });
});



app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
