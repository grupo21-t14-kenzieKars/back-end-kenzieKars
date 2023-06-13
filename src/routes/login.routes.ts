import { Router } from "express";
import { verifySchemaMiddleware } from "../middlewares";
import loginSchema from "../schemas/login.schema";
import loginController from "../controllers/login/login.controller";

const loginRouter = Router();

loginRouter.post("", verifySchemaMiddleware(loginSchema), loginController);

export default loginRouter;
