//Modules
const express = require("express");
const morgan = require("morgan");
const tourRouter = require("./routes/tourRoutes");
const userRouter = require("./routes/userRoutes");

//Initializing
const app = express();

//Middle-Wares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.static(`${__dirname}/public`))


app.use((req, res, next) => {
  console.log("middleware is running");
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

//Routes
app.use("/api/adan/tours", tourRouter);
app.use("/api/adan/users", userRouter);

//Exports

module.exports = app;