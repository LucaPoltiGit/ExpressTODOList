import Task from "../models/Task.js";

// Crear tarea
export const createTaskService = async ({ title, description, status, userId }) => {
  const task = new Task({
    title,
    description,
    status,
    user: userId
  });
  await task.save();
  return task;
};

// Obtener todas las tareas del usuario logueado
export const getTasksService = async (userId) => {
  const tasks = await Task.find({ user: userId });
  return tasks;
};

export const getTaskByIdService = async (taskId, userId) => {
  const task = await Task.findOne({ _id: taskId, user: userId }).select("-__v -createdAt -updatedAt");
  if (!task) throw new Error("Tarea no encontrada o no autorizada");
  return task;
};


// Actualizar tarea
export const updateTaskService = async (taskId, userId, updates) => {
  const task = await Task.findOneAndUpdate(
    { _id: taskId, user: userId }, // solo puede actualizar sus propias tareas
    updates,
    { new: true }
  );
  if (!task) throw new Error("Tarea no encontrada o no autorizada");
  return task;
};

// Eliminar tarea
export const deleteTaskService = async (taskId, userId) => {
  const task = await Task.findOneAndDelete({ _id: taskId, user: userId });
  if (!task) throw new Error("Tarea no encontrada o no autorizada");
  return task;
};
