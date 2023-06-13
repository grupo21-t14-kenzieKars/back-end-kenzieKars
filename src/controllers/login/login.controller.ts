import { Request, Response, response } from "express";
import ILogin from "../../interfaces/login/login.interface";
import loginService from "../../services/login/login.service";

const loginController = async (req: Request, res: Response) => {
  const data: ILogin = req.body;
  const response = await loginService(data);

  return res.json(response);
};

export default loginController;
