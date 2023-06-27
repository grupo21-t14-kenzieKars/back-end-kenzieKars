import AppDataSource from "../../data-source";
import ILogin from "../../interfaces/login/login.interface";
import jwt from "jsonwebtoken";
import { AppError } from "../../errors/AppError";
import { compare } from "bcryptjs";
import { User } from "../../entities";

const loginService = async ({ email, password }: ILogin) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({
    email: email,
  });

  if (!user) {
    throw new AppError("Email or passsword invalid", 404);
  }

  const pass = await compare(password, user.password);

  if (!pass) {
    throw new AppError("Email or passsword invalid");
  }

  const token: string = jwt.sign(
    {
      is_seller: user.is_seller,
      user_id: user.id
    },
    process.env.SECRET_KEY!,
    {
      expiresIn: '24h',
      subject: user.id.toString()
    }
  )


  return { token: token };
};

export default loginService;
