import { Request, Response } from "express";
import createCarService from "../../services/cars/createCar.service";
import { ICar, ICarRequest } from "../../interfaces/cars/car.interface";

const createCarController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data: ICarRequest = req.body;
  const responce: ICar = await createCarService(data);

  return res.status(201).json(responce);
};

export default createCarController;
