import { Repository } from "typeorm";
import { IUserReturn, IUserUpdate } from "../../interfaces/users/user.interface";
import AppDataSource from "../../data-source";
import { AppError } from "../../errors/AppError";
import { UserReturnSchema } from "../../schemas/user.schema";
import { User } from "../../entities";

const UpdateUserService = async (id: string, data: IUserUpdate): Promise<IUserReturn> =>{
    const userRepository: Repository<User> = AppDataSource.getRepository(User)
    const findUser: User | null = await userRepository.findOne({
        where: { id },
        relations: ["address"],
    })

    if(!findUser){
        throw new AppError("User not found!", 404)
    }

    const updatedUser = userRepository.create({
        ...findUser,
        ...data,
    })

    await userRepository.save(updatedUser)

    return UserReturnSchema.parse(updatedUser)
}

export default UpdateUserService;