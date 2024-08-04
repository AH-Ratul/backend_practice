const express = require("express");
const userRouter = express.Router();
const userController = require("./userController");
const authController = require("./authController");

userRouter.post("/signup", userController.createUser);
userRouter.post("/login", authController.loginUser);
userRouter.get("/getUser", userController.getUsers);
userRouter.post("/signup/bulk", userController.createUsers);
userRouter.put("/:id", userController.updateUser);
userRouter.delete("/:id", userController.deleteUser);

module.exports = userRouter;
