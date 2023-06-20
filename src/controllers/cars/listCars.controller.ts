import { Request, Response } from "express"
import { ICar } from "../../interfaces/cars/car.interface"
import { listCarsService } from "../../services/cars"

const listCarsController = async (req: Request, res: Response): Promise<Response> => {

    const listCars:ICar[] = await listCarsService()

    return res.status(200).json(listCars)
}

export default listCarsController