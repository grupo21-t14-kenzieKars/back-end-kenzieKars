import { Request, Response } from "express";
import listCarByUserService from "../../services/cars/listCarsByUser.service";
import { ICarPagination } from "../../interfaces/cars/car.interface";

const listCarByUserContrller = async (req: Request, res: Response) => {
  const userId: string = req.params.id;
  const page = parseInt(req.query.page as string) || 1
  const perpage = parseInt(req.query.perpage as string) || 9


  const response: ICarPagination = await listCarByUserService(userId, page, perpage);

  return res.json(response);
};

export default listCarByUserContrller;
