import AppDataSource from "../../data-source";
import { Car } from "../../entities";
import { ICar, ICarRequest } from "../../interfaces/cars/car.interface";
import { carRequestSchema, carSchema } from "../../schemas/car.schema";

const createCarService = async (
  data: ICarRequest,
  userId: string
): Promise<ICarRequest> => {
  const carRepository = AppDataSource.getRepository(Car);

  const newCar: Car = carRepository.create({
    user: {
      id: userId,
    },
    ...data,
  });

  await carRepository.save(newCar);

  const validatedCar: ICarRequest = carRequestSchema.parse(newCar);

  return validatedCar;
};

export default createCarService;
