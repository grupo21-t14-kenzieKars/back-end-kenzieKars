import { Repository } from "typeorm";
import { NextFunction, Response, Request } from "express";
import { Car } from "../entities";
import AppDataSource from "../data-source";
import { AppError } from "../errors/AppError";

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
    return next (new AppError(`this poster id ${carPosterUuid} not found`, 404));
  }

  return next();
};

export default ensurePosterCarExistsMiddleware;
