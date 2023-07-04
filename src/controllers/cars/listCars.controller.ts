import { Request, Response } from "express"
import { ICar, ICarPagination } from "../../interfaces/cars/car.interface"
import { listCarsService } from "../../services/cars"

const listCarsController = async (req: Request, res: Response): Promise<Response> => {
    const page = parseInt(req.query.page as string) || 1
    const perpage = parseInt(req.query.perpage as string) || 9

    const listCars:ICarPagination = await listCarsService(page, perpage)

    return res.status(200).json(listCars)
}

export default listCarsController