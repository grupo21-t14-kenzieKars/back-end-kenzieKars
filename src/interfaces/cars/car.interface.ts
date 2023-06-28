import { z } from "zod";
import {
  carRequestSchema,
  carSchema,
  listCarByUserEschema,
  carCreateReturnSchema
} from "../../schemas/car.schema";
import { DeepPartial } from "typeorm";

type ICarRequest = z.infer<typeof carRequestSchema>;
type ICarReturnCreate = z.infer<typeof carCreateReturnSchema >;


type ICar = z.infer<typeof carSchema>;
type ICarUpdate = DeepPartial<ICarRequest>;
type ICArByUser = z.infer<typeof listCarByUserEschema>;

export { ICarRequest, ICar, ICarUpdate, ICArByUser,ICarReturnCreate };
