import { Request, Response } from "express"
import { ICarPagination } from "../../interfaces/cars/car.interface"
import listPaginatedCarsService from "../../services/cars/listPaginatedCar.service"

const listPaginatedCarsController = async (req: Request, res: Response): Promise<Response> => {
    const page = parseInt(req.query.page as string) || 1
    const perpage = parseInt(req.query.perpage as string) || 9

    const listCars:ICarPagination = await listPaginatedCarsService(page, perpage)

    return res.status(200).json(listCars)
}

export default listPaginatedCarsController