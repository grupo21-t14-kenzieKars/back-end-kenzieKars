import { z } from "zod";

const carRequestSchema = z.object({
  brand: z.string(),
  model: z.string(),
  year: z.string(),
  fuel_type: z.enum(["Diesel", "Etanol", "Gasolina", "Flex"]),
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
  fuel_type: z.enum(["Diesel", "Etanol", "Gasolina", "Flex"]),
  color: z.string(),
  kilometers: z.number(),
  fipe_price: z.number(),
  price: z.number(),
  description: z.string(),
  createdAt: z.string(),
});

export { carRequestSchema, carSchema };
