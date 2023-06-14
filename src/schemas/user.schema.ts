import { z } from "zod";

const CreatedAddressSchema = z.object({
  zip_code: z.string().length(8),
  city: z.string().max(50),
  state: z.string().length(2),
  street: z.string().max(127),
  number: z.string().max(20).optional().default("null"),
  complement: z.string().max(127).optional().default("null")
});

const UserSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
  name: z.string().max(50),
  cpf: z.string().length(11),
  phone: z.string().length(13),
  birth_date: z.date(),
  description: z.string(),
  password: z.string(),
  is_seller: z.boolean(),
  address: CreatedAddressSchema,
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullable(),
});

const AddressReturnSchema = z.object({
  id: z.string().uuid(),
  zip_code: z.string().length(8),
  city: z.string().max(50),
  state: z.string().length(2),
  street: z.string().max(127),
  number: z.string().max(20).optional(),
  complement: z.string().max(127).optional(),
});

const UserReturnSchema = UserSchema.omit({
    password: true
})

const UserRequestSchema = z.object({
  email: z.string().email(),
  name: z.string().max(50),
  cpf: z.string().length(11),
  phone: z.string().length(13),
  birth_date: z.string(),
  description: z.string(),
  password: z.string(),
  is_seller: z.boolean(),
  address: CreatedAddressSchema,
})

export { UserReturnSchema, AddressReturnSchema, UserRequestSchema };