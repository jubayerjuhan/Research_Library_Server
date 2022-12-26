import mongoose from "mongoose";
import validator from "validator";
const schema = mongoose.Schema;

const postSchema = new schema(
  {
    title: {
      type: String,
      required: true,
    },
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

export default mongoose.model("post", postSchema);
