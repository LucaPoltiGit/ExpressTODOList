import { Router } from "express";
const router = Router();

import authRoutes from "./auth.js";
import taskRoutes from "./tasks.js";
import adminRoutes from "./admin.js";

router.get("/", (req, res) => {
  res.send("Servidor funcionando 🚀");
});

router.get("/health", (req, res) => { 
    res.json({ status: "ok" }); 
});

router.use("/auth", authRoutes);
router.use("/tasks", taskRoutes);
router.use("/admin", adminRoutes);

export default router;