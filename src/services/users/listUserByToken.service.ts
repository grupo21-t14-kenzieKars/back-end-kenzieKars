import { Repository } from "typeorm";
import { IUserReturn } from "../../interfaces/users/user.interface";
import AppDataSource from "../../data-source";
import { UserReturnSchema } from "../../schemas/user.schema";
import { User } from "../../entities";
import { AppError } from "../../errors/AppError";

const listUserByTokenService = async (userId: string): Promise<IUserReturn> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User);

    if (!userId) {
        throw new AppError('Usúario não encontrado', 404)
    }

    const user = await userRepository.findOne({
        where: {
            id: userId
        },
        relations: {
            address: true
        }
    });

    return UserReturnSchema.parse(user);
}

export default listUserByTokenService;