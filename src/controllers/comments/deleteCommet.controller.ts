import { Request, Response } from "express";
import updateCommentService from "../../services/comments/updateComment.service";
import deleteCommentService from "../../services/comments/deleteComment.service";

const deleteCommentController = async (req: Request, res: Response) => {
  const commentId = req.params.id;
  const userId = res.locals.user.user_id;

  await deleteCommentService(commentId, userId);

  return res.status(204).send();
};

export default deleteCommentController;
