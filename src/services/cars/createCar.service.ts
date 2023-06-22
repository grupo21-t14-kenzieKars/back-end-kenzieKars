import AppDataSource from "../../data-source";
import { Car } from "../../entities";
import { ICar, ICarRequest } from "../../interfaces/cars/car.interface";
import { carSchema } from "../../schemas/car.schema";

const createCarService = async (
  data: ICarRequest,
  userId: string
): Promise<ICar> => {
  const carRepository = AppDataSource.getRepository(Car);

  const newCar: Car = carRepository.create({
    user: {
      id: userId,
    },
    ...data
  });
  console.log(newCar);

  await carRepository.save(newCar);
  const validatedCar: ICar = carSchema.parse(newCar);

  return validatedCar;
};

export default createCarService;
