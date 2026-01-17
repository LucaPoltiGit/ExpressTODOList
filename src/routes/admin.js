import { Router } from "express";
import { getAllUsers, getAllTasks, createAdminUser } from "../controllers/adminController.js";
import authMiddleware from "../middleware/auth.js";
import adminMiddleware from "../middleware/admin.js";

const router = Router();

router.use(authMiddleware, adminMiddleware);

router.get("/users", getAllUsers);
router.get("/tasks", getAllTasks);
router.post("/create-admin", createAdminUser);

export default router;
