import listCarsService from "../../services/cars/listCar.service"
import { Request, Response } from "express"


export const listCarsController = async (req: Request, res: Response): Promise<Response> => {

    const listCars = await listCarsService()

    return res.status(200).json(listCars)
}