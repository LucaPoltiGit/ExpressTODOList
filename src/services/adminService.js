import User from "../models/User.js";
import Task from "../models/Task.js";

export const getAllUsersService = async () => {
  return await User.find().select("-password -__v -createdAt -updatedAt");
};

export const getAllTasksService = async () => {
  return await Task.find().select("-__v -createdAt -updatedAt").populate("user", "username email");
};

export const createAdminUserService = async ({ username, email, password }) => {
  const existeUser = await User.findOne({ email });
  if (existeUser) throw new Error("El email ya está registrado");

  const hashedPassword = await bcrypt.hash(password, 10);

  const newAdmin = new User({
    username,
    email,
    password: hashedPassword,
    role: "admin"
  });

  await newAdmin.save();
  return newAdmin;
};
