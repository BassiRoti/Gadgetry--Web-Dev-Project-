const UserSchema=require('../models/User')
const bcrypt = require('bcrypt');

exports.usersignup = async (name, email, password, role) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await UserSchema.create({ name, email, password: hashedPassword, role });
  if (!user) {
    throw new Error("Signup failed");
  }
  console.log(`${{ name, email, password: hashedPassword, role }}`)
  return user;
};

exports.userlogin = async (email, password) => {
  const user = await UserSchema.findOne({ email });
  if (!user) {
    throw new Error("User not found");
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Invalid credentials");
  }

  console.log({user})
  return user;
};
