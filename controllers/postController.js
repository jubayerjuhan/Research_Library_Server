import { catchAsyncError } from "../middlewares/catchAsyncErrors.js";
import postModel from "../models/postModel.js";
import Errorhandler from "../middlewares/ErrorHandler.js";
import { PostSearch } from "../middlewares/apifeature.js";

export const createPost = catchAsyncError(async (req, res, next) => {
  const post = await postModel.create(req.body);

  if (!post) return next(new Errorhandler("Can't Post Right Now"));
  res.status(200).json({
    success: true,
    post,
  });
});

// get all posts
export const getAllPosts = catchAsyncError(async (req, res, next) => {
  const posts = await (
    await new PostSearch(postModel).getPost()
  ).search(req.query.q);

  res.status(200).json({
    success: true,
    posts: posts.allPosts.reverse(),
  });
});

// get single post
export const getSinglePost = catchAsyncError(async (req, res, next) => {
  const post = await postModel.findById(req.params.id);

  res.status(200).json({
    success: true,
    post,
  });
});

// get single post
export const getPostByUser = catchAsyncError(async (req, res, next) => {
  const posts = await postModel
    .find({ author: req.params.id })
    .populate("author");

  res.status(200).json({
    success: true,
    posts,
  });
});
