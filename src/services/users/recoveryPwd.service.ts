import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { AppError } from "../../errors/AppError";
import { User } from "../../entities";

const RecoveryPwdService = async (token: string, data: string): Promise<void> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User);
    const user: User | null = await userRepository.findOneBy({ reset_token: token });

    if (!user) {
        throw new AppError("User not found!", 404);
    }

    user.password = data

    await userRepository.save(user)

    return
};

export default RecoveryPwdService;