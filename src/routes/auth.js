import { Router } from "express";
import { 
    register, 
    login, 
    profile 
} from "../controllers/authController.js";

const router = Router();

router.post("/registrar", register);
router.post("login", login);
router.get("/profile", profile);

export default router;