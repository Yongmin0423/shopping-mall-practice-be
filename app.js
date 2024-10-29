import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import apiRouter from "./routes/apiRouter.js";
import authRouter from "./routes/authRouter.js";
dotenv.config();

const app = express();

app.use(cors());
app.options("*", cors()); // 모든 경로에 대해 OPTIONS 요청 허용
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", apiRouter);
const mongoURI = process.env.MONGODB_URI_PROD;

mongoose
  .connect(mongoURI)
  .then(() => console.log("Mongoose connected"))
  .catch((err) => console.log("DB connection fail", err));
const PORT = process.env.PORT || 4400;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});
