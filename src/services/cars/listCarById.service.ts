import { Repository } from "typeorm";
import { Car } from "../../entities";
import AppDataSource from "../../data-source";
import { carSchema } from "../../schemas/car.schema";
import { ICar } from "../../interfaces/cars/car.interface";

const listCarByIdService = async (id: string):Promise<ICar> => {
  const carRepository: Repository<Car> = AppDataSource.getRepository(Car);
  const car = await carRepository.findOne({
    where: { id: id },
  });

  const getCar = carSchema.parse(car)

  return getCar
};

export default listCarByIdService;
