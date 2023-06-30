import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";

import AppDataSource from "../data-source";
import { User } from "../entities";
import { AppError } from "./../errors/AppError";

const ensureAcountOwnerMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const userFound = await userRepository.findOneBy({
    id: req.params.id,
  });

  if (!userFound) {
    throw new AppError("User not found", 404);
  }
  if (req.params.id !== res.locals.user.user_id) {
    throw new AppError(
      "You do not have permission to execute this action",
      403
    );
  }
  return next();
};

export default ensureAcountOwnerMiddleware
