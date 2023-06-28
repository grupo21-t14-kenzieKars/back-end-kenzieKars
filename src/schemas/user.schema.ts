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
  birth_date: z.string(),
  description: z.string(),
  password: z.string(),
  is_seller: z.boolean(),
  address: CreatedAddressSchema,
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullable(),
});

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


const UserUpdateSchema = UserRequestSchema.omit({
  is_seller: true
})
  .extend({
    address: CreatedAddressSchema.pick({
      zip_code: true,
      city: true,
      state: true,
      street: true,
      number: true,
      complement: true,
    }).partial(),
  }).partial()

const SendEmailSchema = z.object({
  email: z.string().email()
})

const RecoveryPasswordSchema = z.object({
  password: z.string()
})

const listAllUserSchemas = z.array(UserReturnSchema)

export { UserReturnSchema, AddressReturnSchema, UserRequestSchema, UserUpdateSchema, RecoveryPasswordSchema, SendEmailSchema,listAllUserSchemas};
