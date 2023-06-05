import { Repository } from "typeorm";
import DataSourceConfig from "../../data-source";
import { Car } from "../../entities";


const listCarsService = async (): Promise<listCars> => {

    const carRepository: Repository<Car> = DataSourceConfig.getRepository(Car)

    const findCars: Array<Car> = await carRepository.find()

    const listCars:  = listCarsSchema.parse(findCars)

    return listCars
}

export default listCarsService