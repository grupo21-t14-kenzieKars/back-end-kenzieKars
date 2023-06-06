import AppDataSource from "../../data-source";
import { Car } from "../../entities";
import { ICarUpdate } from "../../interfaces/cars/car.interface";
import { AppError } from "../../errors/AppError";

const updateCarService = async (idCar: string, carUpdateData: ICarUpdate) => {
  const carRepository = AppDataSource.getRepository(Car);
  const car = await carRepository.findOneBy({ id: idCar });

  if (!car) {
    throw new AppError("Car not found ", 404);
  }

  const updatedCar = carRepository.create({
    ...car,
    ...carUpdateData,
  });
  await carRepository.save(updatedCar);

  return updatedCar;
};

export default updateCarService;
