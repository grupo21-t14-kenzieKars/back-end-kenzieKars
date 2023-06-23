import { z } from "zod";
import {
  carRequestSchema,
  carSchema,
  listCarByUserEschema,
} from "../../schemas/car.schema";
import { DeepPartial } from "typeorm";

type ICarRequest = z.infer<typeof carRequestSchema>;
type ICar = z.infer<typeof carSchema>;
type ICarUpdate = DeepPartial<ICarRequest>;
type ICArByUser = z.infer<typeof listCarByUserEschema>;

export { ICarRequest, ICar, ICarUpdate, ICArByUser };
