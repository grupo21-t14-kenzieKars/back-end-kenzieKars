import { Router } from "express";
import createCarController from "../controllers/cars/createCar.controller";
import { uptadeCarController } from "../controllers/cars/updateCar.controller";
import ensureUuidIsValidMiddleware from "../middlewares/ensureUuidIsValid.middleware";
import verifySchemaMiddleware from "../middlewares/verifySchema.middleware";
import { carRequestSchema } from "../schemas/car.schema";
import { deleteCarController } from './../controllers/cars/deleteCar.controller';
import { listCarsController } from './../controllers/cars/listCars.controller';
import listCarByIdController from './../controllers/cars/listCarById.controller';
import ensurePosterCarExistsMiddleware from './../middlewares/ensureCarPostExistMiddleware';

const carRouter = Router();

carRouter.post(
  "",
  verifySchemaMiddleware(carRequestSchema),
  createCarController
);

carRouter.get("",listCarsController)
carRouter.get("/:id",ensureUuidIsValidMiddleware,ensurePosterCarExistsMiddleware,listCarByIdController)
carRouter.patch("/:id", ensureUuidIsValidMiddleware,ensurePosterCarExistsMiddleware, uptadeCarController)
carRouter.delete("/:id", ensureUuidIsValidMiddleware,ensurePosterCarExistsMiddleware, deleteCarController)


export default carRouter;
