import AppDataSource from "../../data-source";
import { Car } from "../../entities";
import { ICarRequest } from "../../interfaces/cars/car.interface";
import { carSchema } from "../../schemas/car.schema";

const createCarService = async (data: ICarRequest) => {
  const carRepository = AppDataSource.getRepository(Car);

  const newCar = carRepository.create(data);
  await carRepository.save(newCar);

  const validatedCar = carSchema.parse(newCar);

  return validatedCar;
};

export default createCarService;
