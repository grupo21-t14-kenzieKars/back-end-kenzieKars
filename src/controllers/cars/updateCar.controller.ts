import { Request,Response } from "express";
import { ICarUpdate } from "../../interfaces/cars";
import updateCarService from "../../services/cars/updateCar.service"

const uptadeCarController = async (req: Request, res: Response) => { 
    const carUpdateData: ICarUpdate = req.body
    const idCar : string = req.params.id
    const updateCar = await updateCarService(idCar, carUpdateData) 
    return res.status(200).json(updateCar)
}

export {uptadeCarController}