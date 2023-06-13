import { Router } from "express";
import { verifySchemaMiddleware } from "../middlewares";
import { UserDataSchema } from "../schemas/user.schema";
import createUserController from "../controllers/users/createUser.controller";

const usersRoutes: Router = Router()

usersRoutes.post("", verifySchemaMiddleware(UserDataSchema), createUserController)

