import { catchAsyncError } from "../middlewares/catchAsyncErrors.js";
import Errorhandler from "../middlewares/ErrorHandler.js";
import { sendJwtToken } from "../middlewares/sendJwtToken.js";
import userModel from "../models/userModel.js";

export const registerUser = catchAsyncError(async (req, res, next) => {
  const existingUser = await userModel.find({ email: req.body?.email });
  if (existingUser[0])
    return next(new Errorhandler("User Already Exists", 401));
  const user = await userModel.create(req.body);

  sendJwtToken(user, res);
});

export const loginUser = catchAsyncError(async (req, res, next) => {
  const user = await userModel
    .findOne({ email: req.body.email })
    .select("+password");
  console.log(user);
  if (!user)
    return next(new Errorhandler("No user found with this email", 404));

  const matched = await user.passwordComparison(req.body.password);
  if (!matched)
    return next(new Errorhandler("Your Email Or Password Isn't Matched", 403));

  sendJwtToken(user, res);
});

// get single user

export const getSingleUser = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;

  const user = await userModel.findById(id);
  if (!user) return next(new Errorhandler("No User Found", 404));
  res.status(200).json({
    success: true,
    user,
  });
});
