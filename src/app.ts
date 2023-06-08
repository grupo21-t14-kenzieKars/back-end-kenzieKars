import cors from "cors";
import express, { Application } from "express";
import handleError from "./errors/handleError";
import carRouter from "./routes/car.routes";

const app: Application = express();
app.use(cors());
app.use(express.json());

app.use("/car", carRouter);

app.use(handleError);

export default app;
