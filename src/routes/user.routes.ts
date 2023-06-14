import { Router } from "express";
import createUserController from "../controllers/users/createUser.controller";
import listUserController from "../controllers/users/listUser.controller";
import updateUserController from "../controllers/users/updateUser.controller";
import deleteUserController from "../controllers/users/deleteUser.controller";
import { verifySchemaMiddleware } from "../middlewares";
import { UserRequestSchema, UserUpdateSchema } from "../schemas/user.schema";
import ensureauthMiddleware from "../middlewares/ensureAuthMiddleware";

const userRouter: Router = Router();

userRouter.post("", verifySchemaMiddleware(UserRequestSchema), createUserController);
userRouter.get("", listUserController);
userRouter.patch("/:id", ensureauthMiddleware, verifySchemaMiddleware(UserUpdateSchema), updateUserController);
userRouter.delete("/:id", ensureauthMiddleware, deleteUserController);

export default userRouter;

