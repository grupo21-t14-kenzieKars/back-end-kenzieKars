"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const middlewares_1 = require("../middlewares");
const ensureAuthMiddleware_1 = __importDefault(require("../middlewares/ensureAuthMiddleware"));
const user_schema_1 = require("../schemas/user.schema");
const userRouter = (0, express_1.Router)();
userRouter.post("", (0, middlewares_1.verifySchemaMiddleware)(user_schema_1.UserRequestSchema), middlewares_1.ensureEmailCpfIsValidMiddleware, controllers_1.createUserController);
userRouter.get("", controllers_1.listUserController);
userRouter.get("/profile", ensureAuthMiddleware_1.default, controllers_1.listUserByTokenController);
userRouter.patch("/:id", ensureAuthMiddleware_1.default, middlewares_1.ensureUuidIsValidMiddleware, middlewares_1.ensureAcountOwnerMiddleware, (0, middlewares_1.verifySchemaMiddleware)(user_schema_1.UserUpdateSchema), controllers_1.updateUserController);
userRouter.delete("/:id", ensureAuthMiddleware_1.default, middlewares_1.ensureAcountOwnerMiddleware, controllers_1.deleteUserController);
userRouter.post("/recovery", (0, middlewares_1.verifySchemaMiddleware)(user_schema_1.SendEmailSchema), controllers_1.sendEmailResetPwd);
userRouter.post("/recovery/:token", (0, middlewares_1.verifySchemaMiddleware)(user_schema_1.RecoveryPasswordSchema), controllers_1.recoveryPwd);
exports.default = userRouter;
