import { Request, Response } from "express";
import UpdateUserService from "../../services/users/updateUser.service";

const updateUserController = async (req: Request, res: Response) => {
    const userId = req.params.id;
    const userData = req.body;

    const updatedUser = await UpdateUserService(userId, userData);

    return res.json(updatedUser);
};

export default updateUserController;