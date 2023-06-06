import { z } from "zod";
import { Fuels } from "../entities/car.entity";

const carRequestSchema = z.object({
  brand: z.string(),
  model: z.string(),
  year: z.string(),
  fuel_type: z.nativeEnum(Fuels),
  color: z.string(),
  kilometers: z.number(),
  fipe_price: z.number(),
  price: z.number(),
  description: z.string(),
});

const carSchema = z.object({
  id: z.string(),
  brand: z.string(),
  model: z.string(),
  year: z.string(),
  fuel_type: z.nativeEnum(Fuels),
  color: z.string(),
  kilometers: z.number(),
  fipe_price: z.number(),
  price: z.number(),
  description: z.string(),
  createdAt: z.string(),
});

const listCarEschema = z.array(carSchema);

export { carRequestSchema, carSchema, listCarEschema };
