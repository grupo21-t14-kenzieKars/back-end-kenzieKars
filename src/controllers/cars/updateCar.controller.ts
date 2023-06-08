import { Request, Response } from "express";
import { ICar, ICarUpdate } from "../../interfaces/cars/car.interface";
import updateCarService from "../../services/cars/updateCar.service";

const uptadeCarController = async (req: Request, res: Response):Promise<Response> => {
  const carUpdateData: ICarUpdate = req.body;
  const idCar: string = req.params.id;
  const updateCar:ICarUpdate = await updateCarService(idCar, carUpdateData);
  return res.status(200).json(updateCar);
};

export { uptadeCarController };
