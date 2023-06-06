import { Repository } from "typeorm"
import { Car } from "../../entities"
import AppDataSource from "../../data-source"

const listCarByIdService = async (id: string) => {
    const carRepository: Repository<Car> = AppDataSource.getRepository(Car);
    const car = await carRepository.findOne({
        where: {id: id}
    })

    // const getCar = carResponseSchema.parse(car)

    // return getCar
}

export default listCarByIdService;