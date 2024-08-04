const jwt = require("jsonwebtoken");
const User = require("../model/userModel");
require("dotenv").config();

//require('crypto').randomBytes(64).toString('hex')
const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined in environment variables");
}

async function authenticateUser(email, password) {
  try {
    const user = await User.findOne({ email });
    const isMatch = await user.comparePassword(password);

    if (!user || !isMatch) {
      throw new Error("invalid email or password");
    }

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "10m" });
    return { user, token };
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = { authenticateUser };
