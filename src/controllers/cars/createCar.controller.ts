import { Request, Response } from "express";
import { ICar, ICarRequest } from "../../interfaces/cars/car.interface";
import { createCarService } from "../../services/cars";

const createCarController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data: ICarRequest = req.body;
  const response: ICar = await createCarService(data);

  return res.status(201).json(response);
};

export default createCarController;
