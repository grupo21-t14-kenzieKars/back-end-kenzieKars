import { Router } from "express";
import createUserController from "../controllers/users/createUser.controller";
import listUserController from "../controllers/users/listUser.controller";
import updateUserController from "../controllers/users/updateUser.controller";
import deleteUserController from "../controllers/users/deleteUser.controller";
import { ensureEmailCpfIsValidMiddleware, verifySchemaMiddleware } from "../middlewares";
import { UserRequestSchema, UserUpdateSchema } from "../schemas/user.schema";
import ensureauthMiddleware from "../middlewares/ensureAuthMiddleware";
import listUserByTokenController from "../controllers/users/listUserByToken.controller";
import ensureUuidIsValidMiddleware from './../middlewares/ensureUuidIsValid.middleware';
import sendEmailResetPwd from "../controllers/users/sendEmailRecoveryPwd.controller";
import recoveryPwd from "../controllers/users/recoveryPwd.controller";

const userRouter: Router = Router();

userRouter.post("", verifySchemaMiddleware(UserRequestSchema), ensureEmailCpfIsValidMiddleware, createUserController);
userRouter.get("", listUserController);
userRouter.get("/profile", ensureauthMiddleware, listUserByTokenController);
userRouter.patch("/:id", ensureauthMiddleware, verifySchemaMiddleware(UserUpdateSchema), ensureEmailCpfIsValidMiddleware, updateUserController);
userRouter.delete("/:id", ensureauthMiddleware, deleteUserController);
userRouter.post('/recovery', sendEmailResetPwd)
userRouter.post('/recovery/:token', recoveryPwd)
export default userRouter;

