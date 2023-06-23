import { z } from "zod";
import { Fuels } from "../entities/car.entity";
import { UserReturnSchema } from "./user.schema";

const imagesSchema = z.object({
  one: z.string(),
  two: z.string().nullable().default(null),
  three: z.string().nullable().default(null),
  four: z.string().nullable().default(null),
  five: z.string().nullable().default(null),
  six: z.string().nullable().default(null)
})


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
  images: imagesSchema,
});

const CarOwner = z.object({
  name: z.string(),
  id: z.string()
})

const carSchema = carRequestSchema.extend({
  id: z.string(),
  updatedAt: z.string().nullish(),
  createdAt: z.string().nullish(),
});

const carListSchema = carRequestSchema.extend({
  id: z.string(),
  updatedAt: z.string().nullish(),
  createdAt: z.string().nullish(),
  user: CarOwner
});

const listCarEschema = z.array(carListSchema);

export { carRequestSchema, carSchema, listCarEschema };
