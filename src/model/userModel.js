const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { type } = require("express/lib/response");

const userSchema = new mongoose.Schema({
  fullname: { 
    type: String, 
    required: [true, "A name is Required"] 
  },
  email: { 
    type: String, 
    required: [true, 'Email is Required'],
    unique: true,
    lowercase: true 
  },
  photo: String,
  password: { 
    type: String, 
    required: [true, 'Password is Required'],
    minLength: 8,
  },
  confirmPassword: {
    type: String,
    required: [true, 'Confirm password required']
  },
  createdAT: { 
    type: Date, 
    default: Date.now 
  },
});

// hashing password before saving user
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// method to compare password
userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model("user", userSchema);

module.exports = User;
