import { Router } from "express";
import {
  createCarController,
  listCarsController,
  uptadeCarController,
  deleteCarController,
  listCarByIdController,
} from "../controllers/cars";
import {
  verifySchemaMiddleware,
  ensureUuidIsValidMiddleware,
  ensurePosterCarExistsMiddleware,
} from "../middlewares";
import { carRequestSchema } from "../schemas/car.schema";
import ensureAuthTokenMiddleware from "./../middlewares/ensureAuthMiddleware";
import ensureauthMiddleware from "./../middlewares/ensureAuthMiddleware";
import listCarByUserContrller from "../controllers/cars/listCarsByUser.controller";
import ensureCarPosterOwnerMiddleware from './../middlewares/ensureIsOwnerPostMiddleware';

const carRouter = Router();

carRouter.post(
  "",
  ensureauthMiddleware,
  verifySchemaMiddleware(carRequestSchema),
  createCarController
);

carRouter.get("", listCarsController);
carRouter.get(
  "/:id",
  ensureAuthTokenMiddleware,
  ensureUuidIsValidMiddleware,
  ensurePosterCarExistsMiddleware,
  listCarByIdController
);
carRouter.get("/seller/:id", listCarByUserContrller);

carRouter.patch(
  "/:id",
  ensureauthMiddleware,
  ensureUuidIsValidMiddleware,
  ensurePosterCarExistsMiddleware,
  ensureCarPosterOwnerMiddleware,
  uptadeCarController
);
carRouter.delete(
  "/:id",
  ensureauthMiddleware,
  ensureUuidIsValidMiddleware,
  ensurePosterCarExistsMiddleware,
  ensureCarPosterOwnerMiddleware,
  deleteCarController
);

export default carRouter;
