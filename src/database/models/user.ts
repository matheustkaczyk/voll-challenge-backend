import mongoose from "mongoose";
import { UserModel } from "../../controllers/user/user.interface";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 60,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 60,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 60,
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

const User = mongoose.model<UserModel>("User", UserSchema);
export default User;
