import { Repository } from "typeorm"
import { User } from "../../entities/user.entity"
import AppDataSource from "../../data-source"
import { UserReturnSchema } from "../../schemas/user.schema";
import { IUserData, IUserReturn } from "../../interfaces/users/user.interface";

const createUserService = async (data): Promise<IUserReturn> =>{
    const userRepository: Repository<User> = AppDataSource.getRepository(User);

    const user = userRepository.create(data);

    await userRepository.save(user);

    const newUser = UserReturnSchema.parse(user);

    return newUser
}

export default createUserService