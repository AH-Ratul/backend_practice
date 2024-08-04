const User = require("../model/userModel");

const createUser = async (userData) => {
  try {
    const newUser = await User.create(userData);
    return newUser;
  } catch (error) {
    console.log(error)
    throw new Error("error while creating user", error);
    
  }
};

const createUsers = async (userData) => {
  try {
    const newUser = await User.insertMany(userData);
    return newUser;
  } catch (error) {
    console.log("many error: ", error);
    throw new Error("error while creating many user");
  }
};

const getUsers = async () => {
  try {
    const getUser = await User.find();
    return getUser;
  } catch (error) {
    throw new Error("error while getting");
  }
};

const updateUser = async (userId, updateData) => {
  try {
    const update = await User.findByIdAndUpdate(userId, updateData, {
      new: true,
    });
    return update;
  } catch (error) {
    throw new Error("error while updating");
  }
};

const deleteUser = async (userId) => {
  try {
    const deleteUser = await User.findByIdAndDelete(userId);
    return deleteUser;
  } catch (error) {
    throw new Error("error while deleting")
  }
};

module.exports = { createUser, getUsers, createUsers, updateUser, deleteUser };
