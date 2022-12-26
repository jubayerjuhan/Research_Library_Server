import mongoose from "mongoose";

export const connectDatabase = () => {
  mongoose
    .connect("mongodb://localhost:27017/Research_Library")
    .then((res) => {
      console.log("Database Connected To Server Successfully...");
    })
    .catch((error) => {
      console.log("Oops! Database Connection Error...");
    });
};
