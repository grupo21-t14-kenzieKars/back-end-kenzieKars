import { Repository } from "typeorm";
import { IUserReturn, IUserUpdate } from "../../interfaces/users/user.interface";
import { User } from "../../entities/user.entity";
import AppDataSource from "../../data-source";
import { AppError } from "../../errors/AppError";
import { UserDataSchema } from "../../schemas/user.schema";

const UpdateUserService = async (id: string, data): Promise<IUserReturn> =>{
    const userRepository: Repository<User> = AppDataSource.getRepository(User)
    const findUser: User | null = await userRepository.findOneBy({id:id})

    if(!findUser){
        throw new AppError("User not found!", 404)
    }

    const updatedUser = userRepository.create({
        ...findUser,
        ...data
    })

    await userRepository.save(updatedUser)

    return UserDataSchema.parse(updatedUser)
}

export default UpdateUserService;