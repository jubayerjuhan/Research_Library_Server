import { Router } from "express";
import {
  getSingleUser,
  loginUser,
  registerUser,
} from "../controllers/userController.js";
const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/:id").post(getSingleUser);

export default router;
