import { Request, Response } from "express"
import deleteCarService from "../../services/cars/deleteCar.service"

export const deleteCarController = async (req: Request, res: Response): Promise<Response> => {
    const carId: string = req.params.id

    await deleteCarService(carId)

    return res.status(204).send()
}