import { Router } from "express";
import {
  createUserController,
  listUserController,
  listUserByTokenController,
  updateUserController,
  deleteUserController,
  sendEmailResetPwd,
  recoveryPwd,
} from "../controllers";
import {
  verifySchemaMiddleware,
  ensureEmailCpfIsValidMiddleware,
  ensureUuidIsValidMiddleware,
  ensureAcountOwnerMiddleware,
} from "../middlewares";
import ensureauthMiddleware from "../middlewares/ensureAuthMiddleware";
import {
  UserRequestSchema,
  UserUpdateSchema,
  SendEmailSchema,
  RecoveryPasswordSchema,
} from "../schemas/user.schema";

const userRouter: Router = Router();

userRouter.post(
  "",
  verifySchemaMiddleware(UserRequestSchema),
  ensureEmailCpfIsValidMiddleware,
  createUserController
);
userRouter.get("", listUserController);
userRouter.get("/profile", ensureauthMiddleware, listUserByTokenController);
userRouter.patch(
  "/:id",
  ensureauthMiddleware,
  ensureUuidIsValidMiddleware,
  ensureAcountOwnerMiddleware,
  verifySchemaMiddleware(UserUpdateSchema),
  updateUserController
);
userRouter.delete(
  "/:id",
  ensureauthMiddleware,
  ensureAcountOwnerMiddleware,
  deleteUserController
);
userRouter.post(
  "/recovery",
  verifySchemaMiddleware(SendEmailSchema),
  sendEmailResetPwd
);
userRouter.post(
  "/recovery/:token",
  verifySchemaMiddleware(RecoveryPasswordSchema),
  recoveryPwd
);
export default userRouter;
