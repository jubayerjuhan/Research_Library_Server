import bodyParser from "body-parser";
import express from "express";
import { connectDatabase } from "./middlewares/connectDatabase.js";
import Errorhandler from "./middlewares/ErrorHandler.js";
import errorMiddleware from "./middlewares/errorMiddleware.js";

const app = express();

// add express bodyparser
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// connect database
connectDatabase();

const PORT = 4000;

app.get("/", (req, res, next) => {
  return next(new Errorhandler("Hello World", 501));
});

app.listen(PORT, () => {
  console.log(`App Is Listerning To Port ${PORT}...`);
});

app.use(errorMiddleware);
