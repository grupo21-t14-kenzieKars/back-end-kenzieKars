import { Repository } from "typeorm";
import DataSourceConfig from "../../data-source";
import { Car } from "../../entities";
import { ICar, ICarPagination } from "../../interfaces/cars/car.interface";
import { listCarEschema } from "../../schemas/car.schema";

const listPaginatedCarsService = async (page: number = 1, perpage: number = 9): Promise<ICarPagination> => {
  const carRepository: Repository<Car> = DataSourceConfig.getRepository(Car);

  const findCars = await carRepository.find({
    where: {
      is_active:true
    },
    relations: {
      images: true,
      user: true
    }
  })

  const listCars: ICar[] = listCarEschema.parse(findCars);

  const totalCount = listCars.length
  const firstPage = (page - 1) * perpage
  const endPage = firstPage + perpage
  const data = listCars.slice(firstPage, endPage)

  let nextPage: string | null = null
  if(endPage < totalCount){
    nextPage = `http://localhost:3000/car/paginated?page=${page + 1}&perpage=${perpage}`
  }

  let prevPage: string | null = null
  if(page> 1){
    prevPage = `http://localhost:3000/car/paginated?page=${page - 1}&perpage=${perpage}`
  }
  
  const result: ICarPagination = {
    prev: prevPage,
    next: nextPage,
    count: totalCount,
    cars: data
  }

  return result;
};

export default listPaginatedCarsService;
