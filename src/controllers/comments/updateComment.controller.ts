import { Request, Response } from "express";
import updateCommentService from "../../services/comments/updateComment.service";

const updateCommentController = async (req: Request, res: Response) => {
  const commentId = req.params.id;
  const { content } = req.body;
  const userId = res.locals.user.user_id;

  const response = await updateCommentService(commentId, content, userId);

  return res.json(response);
};

export default updateCommentController;
