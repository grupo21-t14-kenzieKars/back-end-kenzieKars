import { Repository } from "typeorm";
import { IUserReturn } from "../../interfaces/users/user.interface";
import AppDataSource from "../../data-source";
import { UserReturnSchema } from "../../schemas/user.schema";
import { User } from "../../entities";

const listUserByTokenService = async (id: string): Promise<IUserReturn> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({
    where: {
      id,
    },
    relations: {
      address: true,
    },
  });

  const userWithDate = {
    ...user,
    birth_date: new Date(user!.birth_date),
  };

  return UserReturnSchema.parse(userWithDate);
};

export default listUserByTokenService;
