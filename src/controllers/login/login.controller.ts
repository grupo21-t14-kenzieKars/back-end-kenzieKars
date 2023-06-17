import { Request, Response, NextFunction } from "express";
import ILogin from "../../interfaces/login/login.interface";
import loginService from "../../services/login/login.service";

const loginController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data: ILogin = req.body;
    const response = await loginService(data);
    return res.send(response);
  } catch (error) {
    console.log(error); 
    next(error);
  }
};

export default loginController;