const express = require("express");
const appRouter = express.Router();
const userRouter = require("../controllers/userRouter");

appRouter.use("/users", userRouter);

module.exports = appRouter;
