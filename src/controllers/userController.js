const userServices = require("../services/userServices");
const tryCatch = require("../utils/tryCatch");

const createUser = tryCatch(async (req, res) => {
  const newUser = await userServices.createUser(req.body);

  // SEND RESPONSE
  res.status(201).json({ 
    status: "Success", 
    data: newUser 
  });
});

const createUsers = async (req, res) => {
  try {
    const newUser = await userServices.createUsers(req.body);
    res.status(200).json(newUser);
  } catch (error) {
    console.log(error);
  }
};

const getUsers = async (req, res) => {
  try {
    const getUser = await userServices.getUsers();

    // SEND RESPONSE
    res.status(200).json({
      status: "Success",
      results: getUser.length,
      data: getUser,
    });
  } catch (error) {
    console.log("getting user error", error);
  }
};

const updateUser = async (req, res) => {
  try {
    const update = await userServices.updateUser(req.params.id, req.body);
    res.json(update);
  } catch (error) {
    console.log("getting update error", error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const deleteUser = await userServices.deleteUser(req.params.id);
    if (!deleteUser) {
      return res.status(404).json({ error: "user not found" });
    }
    res.status(200).json({ message: "Deleted User" });
  } catch (error) {
    console.log("getting deleting error", error);
  }
};

module.exports = { createUser, getUsers, createUsers, updateUser, deleteUser };
