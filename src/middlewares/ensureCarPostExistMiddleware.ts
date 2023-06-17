import { Repository } from "typeorm";
import { NextFunction, Response, Request } from "express";
import AppDataSource from "../data-source";
import { AppError } from "../errors/AppError";
import { Car } from "../entities";

const ensurePosterCarExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const posterRepository: Repository<Car> = AppDataSource.getRepository(Car);
  const carPosterUuid: string = req.params.id;

  const findCarPoster = await posterRepository.findOneBy({
    id: carPosterUuid,
  });

  if (!findCarPoster) {
    throw new AppError(`this poster id ${carPosterUuid} not found`, 404);
  }

  return next();
};

export default ensurePosterCarExistsMiddleware;
