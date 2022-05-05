import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 30,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 30,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 30,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  balance: {
    type: Number,
    default: 0,
  },
  role: {
    type: String,
    default: "user",
  },
});
