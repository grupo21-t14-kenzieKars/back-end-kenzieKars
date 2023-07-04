import AppDataSource from "../../data-source";
import { User } from "../../entities";
import { AppError } from "../../errors/AppError";
import { ICArByUser, ICarPagination } from "../../interfaces/cars/car.interface";
import { listCarByUserEschema } from "../../schemas/car.schema";

const listCarByUserService = async (userId: string, page: number = 1, perpage: number = 9): Promise<ICarPagination> => {
  const userRepository = AppDataSource.getRepository(User);

  const cars = await userRepository.findOne({
    where: {
      id: userId,
    },
    relations: {
      cars: { images: true, user: true },
    },
  });

  if(!cars?.is_seller){
    throw new AppError("User is not a seller", 404)
  }

  const validatedCars: ICArByUser = listCarByUserEschema.parse(cars);

  const totalCount = validatedCars.cars.length
  const firstPage = (page - 1) * perpage
  const endPage = firstPage + perpage
  const data = validatedCars.cars.slice(firstPage, endPage)

  let nextPage: string | null = null
  if(endPage < totalCount){
    nextPage = `http://localhost:3000/car/seller/${userId}?page=${page + 1}&perpage=${perpage}`
  }

  console.log(nextPage)

  let prevPage: string | null = null
  if(page> 1){
    prevPage = `http://localhost:3000/car/seller/${userId}?page=${page - 1}&perpage=${perpage}`
  }

  const result: ICarPagination = {
    prev: prevPage,
    next: nextPage,
    count: totalCount,
    cars: data
  }

  return result;
};

export default listCarByUserService;
