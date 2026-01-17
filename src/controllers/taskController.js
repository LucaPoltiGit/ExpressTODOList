import {
  createTaskService,
  getTasksService,
  updateTaskService,
  deleteTaskService,
  getTaskByIdService
} from "../services/taskService.js";

export const createTask = async (req, res) => {
  try {
    const { title, description, status } = req.body;
    const task = await createTaskService({ title, description, status, userId: req.user.id });
    res.status(201).json({ msg: "Tarea creada correctamente", task });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const getTasks = async (req, res) => {
  try {
    const tasks = await getTasksService(req.user.id);
    res.json({ tasks });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const task = await updateTaskService(id, req.user.id, updates);
    res.json({ msg: "Tarea actualizada", task });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteTaskService(id, req.user.id);
    res.json({ msg: "Tarea eliminada" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const getTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await getTaskByIdService(id, req.user.id);
    res.json({ task });
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

