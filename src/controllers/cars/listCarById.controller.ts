import { Request, Response } from "express";
import listCarByIdService from "../../services/cars/listCarById.service";

const listCarByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const car = await listCarByIdService(id);

  return res.status(200).json(car);
};

export default listCarByIdController;
