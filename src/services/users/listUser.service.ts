import { Repository } from "typeorm"
import AppDataSource from "../../data-source"
import { User } from "../../entities/user.entity"

const listUserService = async ():Promise<User[]> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const findUser = await userRepository.find({
        select:[
            "id",
            "name",
            "email",
            "cpf",
            "birth_date",
            "createdAt",
            "address",
        ]
    })

    return findUser;
}

export default listUserService;