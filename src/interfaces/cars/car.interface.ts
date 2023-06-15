import { z } from "zod";
import { carRequestSchema, carSchema } from "../../schemas/car.schema";
import { DeepPartial } from 'typeorm';

type ICarRequest = z.infer<typeof carRequestSchema>
type ICar = z.infer<typeof carSchema>
type ICarUpdate = DeepPartial<ICarRequest>

export { ICarRequest, ICar,ICarUpdate};
