import AppDataSource from "../../data-source";
import { Car } from "../../entities";
import {
  ICar,
  ICarRequest,
  ICarReturnCreate,
} from "../../interfaces/cars/car.interface";
import { carCreateReturnSchema } from "../../schemas/car.schema";

const createCarService = async (
  data: ICarRequest,
  userId: string
): Promise<ICarReturnCreate> => {
  const carRepository = AppDataSource.getRepository(Car);

  const newCar: Car = carRepository.create({
    user: {
      id: userId,
    },
    ...data,
  });

  await carRepository.save(newCar);

  const validatedCar: ICarReturnCreate = carCreateReturnSchema.parse(newCar);

  return validatedCar;
};

export default createCarService;
