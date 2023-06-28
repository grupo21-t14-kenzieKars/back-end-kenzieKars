import { z } from "zod";
import { Fuels } from "../entities/car.entity";
import { carCommentReturnSchema } from "./comments.schema";

const imagesSchema = z.object({
  one: z.string(),
  two: z.string().nullable().default(null),
  three: z.string().nullable().default(null),
  four: z.string().nullable().default(null),
  five: z.string().nullable().default(null),
  six: z.string().nullable().default(null),
});

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
  id: z.string(),
  description: z.string()
})

const carComments = carCommentReturnSchema.extend({
  user: z.string()
})

const carSchema = carRequestSchema.extend({
  id: z.string(),
  user: CarOwner,
  updatedAt: z.string().nullish(),
  createdAt: z.string().nullish(),
});

const listCarEschema = z.array(carSchema);

export { carRequestSchema, carSchema, listCarEschema };
