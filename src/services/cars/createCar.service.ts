import AppDataSource from "../../data-source";
import { Car } from "../../entities";
import { car, carRequest } from "../../interfaces/cars/car.interface";
import { carSchema } from "../../schemas/car.schema";

const createCarService = async (data: carRequest): Promise<car> => {
  const carRepository = AppDataSource.getRepository(Car);

  const newCar: Car = carRepository.create(data);
  await carRepository.save(newCar);

  const validatedCar: car = carSchema.parse(newCar);

  return validatedCar;
};

export default createCarService;
