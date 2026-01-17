import { getAllUsersService, getAllTasksService, createAdminUserService } from "../services/adminService.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await getAllUsersService();
    res.json({ users });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const getAllTasks = async (req, res) => {
  try {
    const tasks = await getAllTasksService();
    res.json({ tasks });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const createAdminUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const admin = await createAdminUserService({ username, email, password });
    res.status(201).json({ msg: "Admin creado correctamente", admin });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
