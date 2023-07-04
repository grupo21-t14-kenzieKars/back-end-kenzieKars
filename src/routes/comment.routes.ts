import { Router } from "express";
import createCommentController from "../controllers/comments/createComment.controller";
import ensureauthMiddleware from "../middlewares/ensureAuthMiddleware";
import {
  ensureUuidIsValidMiddleware,
  verifySchemaMiddleware,
} from "../middlewares";
import { carCommentSchema } from "../schemas/comments.schema";
import updateCommentController from "../controllers/comments/updateComment.controller";
import deleteCommentController from "../controllers/comments/deleteCommet.controller";

const commentRouter = Router();

commentRouter.post(
  "/:id",
  ensureauthMiddleware,
  ensureUuidIsValidMiddleware,
  verifySchemaMiddleware(carCommentSchema),
  createCommentController
);
commentRouter.patch(
  "/:id",
  ensureauthMiddleware,
  ensureUuidIsValidMiddleware,
  verifySchemaMiddleware(carCommentSchema),
  updateCommentController
);
commentRouter.delete(
  "/:id",
  ensureauthMiddleware,
  ensureUuidIsValidMiddleware,
  deleteCommentController
);

export default commentRouter;
