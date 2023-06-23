import { Repository } from "typeorm"
import AppDataSource from "../../data-source"
import { CarComment } from "../../entities/comment.entity"

const createCommentService = async (data: string, carId: string, userId: string) => {
    const carCommentRepository: Repository<CarComment> = AppDataSource.getRepository(CarComment)

    const newComment = carCommentRepository.create()
}