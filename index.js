import express from "express";
import { connectDatabase } from "./middlewares/connectDatabase.js";
import errorMiddleware from "./middlewares/errorMiddleware.js";
import userRoute from "./routes/useRoute.js";
import postRoute from "./routes/postRoute.js";
import cors from "cors";

const app = express();
const PORT = 4000;

// add express bodyparser
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: false }));

// connect database
connectDatabase();

app.post("/", (req, res, next) => {
  res.status(200).json({
    message: "Running Successfully",
  });
});

// adding all routes
app.use("/user", userRoute);
app.use("/post", postRoute);

app.listen(PORT, () => {
  console.log(`App Is Listerning To Port ${PORT}...`);
});

app.use(errorMiddleware);
