import { Request, Response } from "express";
import { ICar, ICarRequest, ICarReturnCreate } from "../../interfaces/cars/car.interface";
import { createCarService } from "../../services/cars";

const createCarController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data: ICarRequest = req.body;
  const userId = res.locals.user.user_id
  const response: ICarReturnCreate = await createCarService(data, userId);

  return res.status(201).json(response);
};

export default createCarController;
