import { Repository } from "typeorm"
import DataSourceConfig from "../../data-source"
import { Car } from "../../entities"

const deleteCarService = async (carId: string): Promise<void> => {

    const carRepository: Repository<Car> = DataSourceConfig.getRepository(Car)

    const car = await carRepository.findOne({
        where: {
            id: carId
        }
    })

    await carRepository.remove(car!)
}


export default deleteCarService