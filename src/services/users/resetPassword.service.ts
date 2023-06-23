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

    if (user.reset_token_date && (new Date().getTime() - user.reset_token_date.getTime()) / (1000 * 60 * 60) > 1) {
        throw new AppError("Expired token", 401)
    }
    user.password = data
    user.reset_token = null

    await userRepository.save(user)

    return
};

export default RecoveryPwdService;