import { Request, Response } from "express";
import listUserByTokenService from "../../services/users/listUserByToken.service";

const listUserByTokenController = async (req: Request, res: Response) => {
    const userId = res.locals.user.user_id


    const user = await listUserByTokenService(userId);

    return res.status(200).json(user);
}

export default listUserByTokenController;