import { Request, Response } from "express";
import listUserByTokenService from "../../services/users/listUserByToken.service";

const listUserByTokenController = async (req: Request, res: Response) =>{
    const userId = req.params.id;
    
    console.log(userId);

    const user = await listUserByTokenService(userId);

    return res.status(200).json(user);
}

export default listUserByTokenController;