import mongoose from "mongoose";
import { USER_ROLES } from "../constants/enums.js";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
    maxlength: 20
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^\S+@\S+\.\S+$/, "Formato de email inválido"]
  },
  password: {
    type: String,
    required: true,
    minlength: 6, 
    maxlength: 100 
  },
  firstName: {
    type: String,
    maxlength: 30
  },
  lastName: {
    type: String,
    maxlength: 30
  },
  age: {
    type: Number,
    min: 0,
    max: 120
  },
  role: {
    type: String,
    enum: USER_ROLES,
    default: "user"
  }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);
export default User;
