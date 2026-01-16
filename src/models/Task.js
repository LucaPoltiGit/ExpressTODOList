import mongoose from "mongoose";
import { TASK_STATUS } from "../constants/enums.js";

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  description: {
    type: String,
    maxlength: 200
  },
  status: {
    type: String,
    enum: TASK_STATUS,
    default: "pending"
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
}, { timestamps: true });

const Task = mongoose.model("Task", taskSchema);
export default Task;
