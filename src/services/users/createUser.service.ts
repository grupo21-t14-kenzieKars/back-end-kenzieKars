import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { UserReturnSchema } from "../../schemas/user.schema";
import {
  IUserRequest,
  IUserReturn,
} from "../../interfaces/users/user.interface";
import { User } from "../../entities";

const createUserService = async (data: IUserRequest): Promise<IUserReturn> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user = userRepository.create(data);

  await userRepository.save(user);

  const newUser = UserReturnSchema.parse(user);

  return newUser;
};

export default createUserService;
