import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import AppDataSource from "../data-source";
import { AppError } from "../errors/AppError";
import { Car } from "../entities";

const ensureCarPosterOwnerMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const posterRepository: Repository<Car> = AppDataSource.getRepository(Car);
  const foundCarPoster: Car = await posterRepository.findOneOrFail({
    where: {
      id: req.params.id,
    },
    relations: {
      user: true,
    },
  });

  if (foundCarPoster.user.id !== res.locals.user.user_id) {
    throw new AppError(
      "you do not have permission to execute this action",
      403
    );
  }

  return next();
};

export default ensureCarPosterOwnerMiddleware;
