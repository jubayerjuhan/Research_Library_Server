import mongoose from "mongoose";

export const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URI)
    .then((res) => {
      console.log("Database Connected To Server Successfully...");
    })
    .catch((error) => {
      console.log("Oops! Database Connection Error...");
    });
};
