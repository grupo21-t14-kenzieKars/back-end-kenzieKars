import { Repository } from "typeorm";
import { Car } from "../../entities";
import AppDataSource from "../../data-source";
import { carSchema } from "../../schemas/car.schema";
import { carCommentListSchema } from "../../schemas/comments.schema";

const listCarByIdService = async (id: string): Promise<any> => {
  const carRepository: Repository<Car> = AppDataSource.getRepository(Car);
  const car = await carRepository.findOne({
    where: { id: id },
    relations: {
      images: true,
      comments: {
        user: true
      }
    }
  });

  const getCar = carSchema.parse(car)
  const comments = carCommentListSchema.parse(car?.comments)

  const carWithComments = { ...getCar, comments }
  return carWithComments
};

export default listCarByIdService;
