import { Request, Response, NextFunction } from "express"
import { Repository } from "typeorm"
import AppDataSource from "../data-source"
import { User } from "../entities"
import { AppError } from "../errors/AppError"

const ensureEmailCpfIsValidMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const user = req.body
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    if (user.email) {
        const uniqueEmail = await userRepository.findOneBy({
            email: user.email
        });
        if (uniqueEmail) {
            throw new AppError("Email already registered", 409)
        }
    }
    if (user.cpf) {
        const uniqueCpf = await userRepository.findOneBy({
            cpf: user.cpf
        })

        if (uniqueCpf) {
            throw new AppError("Cpf already registered", 409)
        }
    }


    return next()
}

export default ensureEmailCpfIsValidMiddleware;