import { Repository } from "typeorm"
import AppDataSource from "../../data-source"
import { CarComment } from "../../entities/comments.entity"
import { carCommentReturnSchema } from "../../schemas/comments.schema"
import { Car, User } from "../../entities"
import { AppError } from "../../errors/AppError"
import { log } from "console"

const createCommentService = async (content: string, carId: string, userId: string) => {
    const carCommentRepository: Repository<CarComment> = AppDataSource.getRepository(CarComment)
    const carRepository: Repository<Car> = AppDataSource.getRepository(Car)
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const findUser = await userRepository.findOneBy({ id: userId })
    const findCar = await carRepository.findOneBy({ id: carId })

    if (!findCar) {
        throw new AppError("Car not found!")
    }

    const newComment = carCommentRepository.create({
        user: {
            id: userId
        },
        car: {
            id: carId
        },
        content: content
    })

    await carCommentRepository.save(newComment);

    const validatedComment = carCommentReturnSchema.parse(newComment);

    return validatedComment
}

export default createCommentService