import { Router } from "express";
import { verifySchemaMiddleware } from "../middlewares";
import createUserController from "../controllers/users/createUser.controller";
import { UserRequestSchema } from "../schemas/user.schema";
import listUserController from "../controllers/users/listUser.controller";
import updateUserController from "../controllers/users/updateUser.controller";
import deleteUserController from "../controllers/users/deleteUser.controller";
import ensureauthMiddleware from "../middlewares/ensureAuthMiddleware";

const usersRoutes: Router = Router();

usersRoutes.post("", verifySchemaMiddleware(UserRequestSchema), createUserController);
usersRoutes.get("", listUserController);
usersRoutes.patch("/id", ensureauthMiddleware, updateUserController);
usersRoutes.delete("/id", ensureauthMiddleware, deleteUserController);

