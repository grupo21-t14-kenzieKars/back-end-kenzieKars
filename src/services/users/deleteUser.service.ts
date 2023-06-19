import { Repository } from "typeorm"
import AppDataSource from "../../data-source"
import { User } from "../../entities";

const deleteUserService = async (id: string): Promise<void> =>{
    const userRepository: Repository<User> = AppDataSource.getRepository(User);

    await userRepository.delete({
        id: id
    })

}

export default deleteUserService;