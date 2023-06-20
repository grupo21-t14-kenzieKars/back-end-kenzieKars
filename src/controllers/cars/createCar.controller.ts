import { Request, Response } from "express";
import { ICar, ICarRequest } from "../../interfaces/cars/car.interface";
import { createCarService } from "../../services/cars";

const createCarController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data: ICarRequest = req.body;
  const userId = res.locals.user;
  const response: ICar = await createCarService(data, userId);

  return res.status(201).json(response);
};

export default createCarController;
