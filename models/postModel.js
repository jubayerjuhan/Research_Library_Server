import mongoose from "mongoose";
import validator from "validator";
const schema = mongoose.Schema;

const postSchema = new schema(
  {
    author: {
      type: String,
      required: true,
      ref: "user",
    },
    description: {
      type: String,
    },
    file: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const postModel = mongoose.model("post", postSchema);
