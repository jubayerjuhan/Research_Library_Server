import { Router } from "express";
import {
  createPost,
  getAllPosts,
  getSinglePost,
} from "../controllers/postController.js";
const router = Router();

router.route("/create").post(createPost);
router.route("/all").post(getAllPosts);
router.route("/:id").post(getSinglePost);

export default router;
