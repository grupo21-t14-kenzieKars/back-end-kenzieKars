import "express-async-errors";
import cors from "cors";
import express, { Application } from "express";
import handleError from "./errors/handleError";
import carRouter from "./routes/car.routes";
import userRouter from "./routes/user.routes";
import loginRouter from "./routes/login.routes";

const app: Application = express();
app.use(cors());
app.use(express.json());

app.use("/car", carRouter);
app.use("/user", userRouter);
app.use("/login", loginRouter);

app.use(handleError);

export default app;
