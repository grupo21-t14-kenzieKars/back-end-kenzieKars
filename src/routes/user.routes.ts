import { Router } from "express";
import { verifySchemaMiddleware } from "../middlewares";
import createUserController from "../controllers/users/createUser.controller";
import { UserRequestSchema } from "../schemas/user.schema";
import listUserController from "../controllers/users/listUser.controller";
import updateUserController from "../controllers/users/updateUser.controller";
import deleteUserController from "../controllers/users/deleteUser.controller";

const usersRoutes: Router = Router();

usersRoutes.post("", verifySchemaMiddleware(UserRequestSchema), createUserController);
usersRoutes.get("", listUserController);
usersRoutes.patch("/id", updateUserController);
usersRoutes.delete("/id", deleteUserController);

