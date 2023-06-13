import AppDataSource from "../../data-source";
import ILogin from "../../interfaces/login/login.interface";
import jwt from "jsonwebtoken";
import { AppError } from "../../errors/AppError";
import { compare } from "bcryptjs";
import { User } from "../../entities/user.entity";

const loginService = async ({ email, password }: ILogin) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({
    email: email,
  });

  if (!user) {
    throw new AppError("Email or passsword invalid", 403);
  }

  const pass = await compare(password, user.password);

  if (!pass) {
    throw new AppError("Email or passsword invalid", 403);
  }

  const token = jwt.sign({}, `${process.env.SECRET_KEY}`, {
    subject: String(user.id),
    expiresIn: "24h",
  });

  return { token: token };
};

export default loginService;
