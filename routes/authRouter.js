import express from "express";
import { postLogin } from "../controller/authController.js";

const authRouter = express.Router();

authRouter.post("/login", postLogin);

export default authRouter;
