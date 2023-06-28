import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { User } from "../../entities";
import { listAllUserSchemas } from "../../schemas/user.schema";

const listUserService = async () => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const findUser = await userRepository.find({
    relations: {
      address: true,
    },
  });

  const listUser = listAllUserSchemas.parse(findUser);
  return listUser;

};

export default listUserService;
