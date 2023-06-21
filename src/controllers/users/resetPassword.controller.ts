import { Request, Response } from "express";
import RecoveryPwdService from "../../services/users/resetPassword.service";

const recoveryPwd = async (req: Request, res: Response) => {
    const { password } = req.body
    const { token } = req.params

    await RecoveryPwdService(token, password)

    return res.json({ message: "password change with sucess" })
}

export default recoveryPwd
