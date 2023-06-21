import { Request, Response } from "express";
import sendEmailResetPassword from "../../services/users/sendEmailRecoveryPwd.service";

const sendEmailResetPwd = async (req: Request, res: Response) => {
    const { email } = req.body

    await sendEmailResetPassword(email)
    return res.json({ message: "token send" })
}

export default sendEmailResetPwd