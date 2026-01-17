import { Router } from "express";
import { 
    getTasks, 
    createTask, 
    updateTask, 
    deleteTask,
    getTaskById
} from "../controllers/taskController.js";
import authMiddleware from "../middleware/auth.js"

const router = Router();

router.use(authMiddleware);

router.get("/",getTasks);
router.get("/:id", getTaskById);
router.post("/", createTask);
router.post("/:id", updateTask);
router.delete("/:id", deleteTask);

export default router;