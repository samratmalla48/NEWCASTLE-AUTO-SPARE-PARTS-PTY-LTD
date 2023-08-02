import Express from "express";
// router object
const router = Express.Router();
import {
  registerController,
  loginController,
} from "../controllers/authController.js";

// routeing
// Registers||method post
router.post("/register", registerController);

// LOGIN || POST
router.post("/login", loginController);

export default router;
