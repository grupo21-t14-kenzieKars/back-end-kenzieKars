import AppDataSource from "../../data-source";
import { User } from "../../entities";
import { ICArByUser } from "../../interfaces/cars/car.interface";
import { listCarEschema } from "../../schemas/car.schema";

const listCarByUserService = async (userId: string): Promise<ICArByUser> => {
  const userRepository = AppDataSource.getRepository(User);

  const cars = await userRepository.findOne({
    where: {
      id: userId,
    },
    relations: {
      cars: { images: true, user: true },
    },
  });

  const validatedCars: ICArByUser = listCarEschema.parse(cars);

  return validatedCars;
};

export default listCarByUserService;
