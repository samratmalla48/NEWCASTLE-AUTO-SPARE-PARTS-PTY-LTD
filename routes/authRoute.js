import Express  from "express";
// router object
const router = Express.Router();
import { registerController } from "../controllers/authController.js";

// routeing
// Registers||method post
router.post("/register", registerController);

export default router;
