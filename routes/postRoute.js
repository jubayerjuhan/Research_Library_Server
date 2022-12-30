import { Router } from "express";
import {
  createPost,
  getAllPosts,
  getPostByUser,
  getSinglePost,
} from "../controllers/postController.js";
const router = Router();

router.route("/create").post(createPost);
router.route("/all").get(getAllPosts);
router.route("/:id").get(getSinglePost);
router.route("/user/:id").get(getPostByUser);

export default router;
