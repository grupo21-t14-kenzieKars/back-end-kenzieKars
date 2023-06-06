import { Repository } from "typeorm";
import DataSourceConfig from "../../data-source";
import { Car } from "../../entities";
import { listCarEschema } from "../../schemas/car.schema";
import { listCar } from "../../interfaces/cars/car.interface";

const listCarsService = async (): Promise<listCar> => {
  const carRepository: Repository<Car> = DataSourceConfig.getRepository(Car);

  const findCars: Array<Car> = await carRepository.find();

  const listCars: listCar = listCarEschema.parse(findCars);

  return listCars;
};

export default listCarsService;
