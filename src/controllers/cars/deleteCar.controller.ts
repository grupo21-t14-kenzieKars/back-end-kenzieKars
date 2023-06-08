import { Request, Response } from "express"
import { deleteCarService } from "../../services/cars"

const deleteCarController = async (req: Request, res: Response): Promise<Response> => {
    const carId: string = req.params.id

    await deleteCarService(carId)

    return res.status(204).send()
}

export default deleteCarController