import { Request, Response } from "express";
import listUserService from "../../services/users/listUser.service";

const listUserController = async (req: Request, res: Response) => {
    const user = await listUserService();

    return res.json(user);
};

export default listUserController;