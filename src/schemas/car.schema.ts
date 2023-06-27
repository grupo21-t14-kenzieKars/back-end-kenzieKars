import { z } from "zod";
import { UserReturnSchema } from "./user.schema";
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
  fuel_type: z.string(),
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

const carWithComments = carSchema.extend({
  comments: z.array(carComments)
})

const carListSchema = carRequestSchema.extend({
  id: z.string(),
  updatedAt: z.string().nullish(),
  createdAt: z.string().nullish(),
  user: CarOwner,
});

const listCarByUserEschema = z.object({
  name: z.string().max(50),
  description: z.string(),
  cars: carListSchema.array(),
});

const listCarEschema = z.array(carListSchema);

export { carRequestSchema, carSchema, listCarEschema, listCarByUserEschema };
