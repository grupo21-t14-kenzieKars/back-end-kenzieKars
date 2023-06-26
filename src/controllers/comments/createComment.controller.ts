import { Request, Response } from "express";
import createCommentService from "../../services/comments/createComment.service";

const createCommentController = async (req: Request, res: Response) => {
    const { content } = req.body
    const carId = req.params.id
    const userId = res.locals.user.user_id

    const response = await createCommentService(content, carId, userId);

    return res.status(201).json(response);
};

export default createCommentController;