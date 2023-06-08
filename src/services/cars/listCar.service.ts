import { Repository } from "typeorm";
import DataSourceConfig from "../../data-source";
import { Car } from "../../entities";
import { ICar } from "../../interfaces/cars/car.interface";
import { listCarEschema } from "../../schemas/car.schema";

const listCarsService = async (): Promise<ICar[]> => {
  const carRepository: Repository<Car> = DataSourceConfig.getRepository(Car);

  const findCars: Array<Car> = await carRepository.find();

  const listCars: ICar[] = listCarEschema.parse(findCars);

  return listCars;
};

export default listCarsService;
