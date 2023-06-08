import { Request, Response } from "express";
import { ICar } from "../../interfaces/cars/car.interface";
import { listCarByIdService } from "../../services/cars";

const listCarByIdController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;

  const car: ICar = await listCarByIdService(id);

  return res.status(200).json(car);
};

export default listCarByIdController;
