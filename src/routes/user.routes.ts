import { Router } from "express";
import createUserController from "../controllers/users/createUser.controller";
import listUserController from "../controllers/users/listUser.controller";
import updateUserController from "../controllers/users/updateUser.controller";
import deleteUserController from "../controllers/users/deleteUser.controller";
import { ensureEmailCpfIsValidMiddleware, ensureUuidIsValidMiddleware, verifySchemaMiddleware } from "../middlewares";
import { RecoveryPasswordSchema, SendEmailSchema, UserRequestSchema, UserUpdateSchema } from "../schemas/user.schema";
import ensureauthMiddleware from "../middlewares/ensureAuthMiddleware";
import listUserByTokenController from "../controllers/users/listUserByToken.controller";
import sendEmailResetPwd from "../controllers/users/sendEmailResetPassword.controller";
import recoveryPwd from "../controllers/users/resetPassword.controller";

const userRouter: Router = Router();

userRouter.post("", verifySchemaMiddleware(UserRequestSchema), ensureEmailCpfIsValidMiddleware, createUserController);
userRouter.get("", listUserController);
userRouter.get("/profile", ensureauthMiddleware, listUserByTokenController);
userRouter.patch("/:id", ensureauthMiddleware, ensureUuidIsValidMiddleware, verifySchemaMiddleware(UserUpdateSchema), ensureEmailCpfIsValidMiddleware, updateUserController);
userRouter.delete("/:id", ensureauthMiddleware, deleteUserController);
userRouter.post('/recovery', verifySchemaMiddleware(SendEmailSchema), sendEmailResetPwd)
userRouter.post('/recovery/:token', verifySchemaMiddleware(RecoveryPasswordSchema), recoveryPwd)
export default userRouter;

