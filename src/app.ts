import cors from "cors";
import express, { Application } from "express";
import carRouter from "./routes/car.routes";

const app: Application = express();
app.use(cors());
app.use(express.json());

app.use("/car", carRouter);

export default app;
