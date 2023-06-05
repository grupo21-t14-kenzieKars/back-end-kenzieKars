import { Router } from "express";
import createCarController from "../controllers/cars/createCar.controller";
import verifySchemaMiddleware from "../middlewares/verifySchema.middleware";
import { carRequestSchema } from "../schemas/car.schema";

const carRouter = Router();

carRouter.post(
  "",
  verifySchemaMiddleware(carRequestSchema),
  createCarController
);

export default carRouter;
