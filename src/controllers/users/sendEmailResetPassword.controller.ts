import { Request, Response } from "express";
import sendEmailResetPassword from "../../services/users/sendEmailResetPassword.service";

const sendEmailResetPwd = async (req: Request, res: Response) => {
    const { email } = req.body

    await sendEmailResetPassword(email)
    return res.json({ message: "token send" })
}

export default sendEmailResetPwd