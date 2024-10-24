import express from "express";
import userRouter from "./userRouter.js";
import authRouter from "./authRouter.js";

const apiRouter = express.Router();

apiRouter.use("/user", userRouter);
apiRouter.use("/auth", authRouter);

export default apiRouter;
