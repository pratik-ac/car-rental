import mongoose from "mongoose";

// set schema/rule/structure
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    maxlenght: 55,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
    maxlenght: 30,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    maxlenght: 30,
  },
  gender: {
    type: String,
    required: true,
    enum: ["male", "female", "other"],
  },
  role: {
    type: String,
    required: true,
    enum: ["admin", "client"],
  },
});

// to remove password field while converting to JSON
userSchema.methods.toJSON = function () {
  var obj = this.toObject();
  delete obj.password;
  return obj;
};

// create table/collection/model
const User = mongoose.model("User", userSchema);

export default User;
