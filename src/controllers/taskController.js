const getTasks = (req, res) => {
     res.json({ message: "Todas las Task(pendiente de implementar)" });
}; 
const createTask = (req, res) => {
     res.json({ message: "Crear Task (pendiente de implementar)" });
}; 
const updateTask = (req, res) => {
     res.json({ message: "Actualizar Task (pendiente de implementar)" });
};
const deleteTask = (req, res) => {
     res.json({ message: "Eliminar Task(pendiente de implementar)" });
     res.message("Eliminar Task(pendiente de implementar)")
};

export {getTasks, createTask, updateTask, deleteTask}
