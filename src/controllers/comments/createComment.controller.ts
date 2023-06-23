import { Request, Response } from "express";

const createCommentController = async (req: Request, res: Response) => {
    const text = req.body
    return res.status(201).json("new comment!");
};

export default createCommentController;