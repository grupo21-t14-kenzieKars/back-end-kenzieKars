import { Router } from "express";
import createCommentController from "../controllers/comments/createComment.controller";
import ensureauthMiddleware from "../middlewares/ensureAuthMiddleware";
import { ensureUuidIsValidMiddleware, verifySchemaMiddleware } from "../middlewares";
import { carCommentSchema } from "../schemas/comments.schema";

const commentRouter = Router();

commentRouter.post("/:id", ensureauthMiddleware, ensureUuidIsValidMiddleware, verifySchemaMiddleware(carCommentSchema), createCommentController);

export default commentRouter;
