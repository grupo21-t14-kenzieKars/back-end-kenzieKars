import { Request, Response } from "express";
import createCarService from "../../services/cars/createCar.service";
import { car, carRequest } from "../../interfaces/cars/car.interface";

const createCarController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data: carRequest = req.body;
  const responce: car = await createCarService(data);

  return res.status(201).json(responce);
};

export default createCarController;
