import listCarsService from "../../services/cars/listCar.service"
import { Request, Response } from "express"
import { ICar } from "../../interfaces/cars/car.interface"


export const listCarsController = async (req: Request, res: Response): Promise<Response> => {

    const listCars:ICar[] = await listCarsService()

    return res.status(200).json(listCars)
}