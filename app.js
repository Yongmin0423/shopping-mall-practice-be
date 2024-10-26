import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import apiRouter from "./routes/apiRouter.js";
import authRouter from "./routes/authRouter.js";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", apiRouter);
const mongoURI = process.env.MONGODB_URI_PROD;

mongoose
  .connect(mongoURI)
  .then(() => console.log("Mongoose connected"))
  .catch((err) => console.log("DB connection fail", err));
const PORT = process.env.PORT || 4400;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
