import { Router } from "express";
import { createCarController, listCarsController, uptadeCarController, deleteCarController, listCarByIdController } from "../controllers/cars";
import { verifySchemaMiddleware, ensureUuidIsValidMiddleware, ensurePosterCarExistsMiddleware } from "../middlewares";
import { carRequestSchema } from "../schemas/car.schema";
import ensureAuthTokenMiddleware from './../middlewares/ensureAuthMiddleware';
import ensureauthMiddleware from "./../middlewares/ensureAuthMiddleware";

const carRouter = Router();

carRouter.post(
  "",
  ensureauthMiddleware,
  verifySchemaMiddleware(carRequestSchema),
  createCarController
);

carRouter.get("", listCarsController)
carRouter.get("/:id", ensureAuthTokenMiddleware, ensureUuidIsValidMiddleware, ensurePosterCarExistsMiddleware, listCarByIdController)
carRouter.patch("/:id", ensureUuidIsValidMiddleware, ensurePosterCarExistsMiddleware, uptadeCarController)
carRouter.delete("/:id", ensureUuidIsValidMiddleware, ensurePosterCarExistsMiddleware, deleteCarController)


export default carRouter;
