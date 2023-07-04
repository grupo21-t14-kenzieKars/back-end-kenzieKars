import { Request, Response } from "express";
import listCarByUserService from "../../services/cars/listCarsByUser.service";
import { ICArByUser } from "../../interfaces/cars/car.interface";

const listCarByUserContrller = async (req: Request, res: Response) => {
  const userId: string = req.params.id;

  const response: ICArByUser = await listCarByUserService(userId);

  return res.json(response);
};

export default listCarByUserContrller;
