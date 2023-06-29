import AppDataSource from "../../data-source";
import { Car } from "../../entities";
import { ICarUpdate } from "../../interfaces/cars/car.interface";
import { AppError } from "../../errors/AppError";
import { carRequestSchema } from "../../schemas/car.schema";
import { Images } from "../../entities/carImages.entity";

const updateCarService = async (idCar: string, carUpdateData: ICarUpdate) => {
  const carRepository = AppDataSource.getRepository(Car);
  const imagesRepository = AppDataSource.getRepository(Images)

  const findCar = await carRepository.findOne({ where:{
    id: idCar,
  }, relations:{
    images: true
  } });

  if (!findCar) {
    throw new AppError("Car not found ", 404);
  }

  const imagesInfo = imagesRepository.create({
    ...findCar.images,
    ...carUpdateData.images
  })

  const updatedCar = carRepository.create({
    ...findCar,
    ...carUpdateData,
    images: imagesInfo
  });

  await carRepository.save(updatedCar);

  const newCar = carRequestSchema.parse(updatedCar)

  return newCar;
};

export default updateCarService;
