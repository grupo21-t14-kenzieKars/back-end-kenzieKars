"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listAllUserSchemas = exports.SendEmailSchema = exports.RecoveryPasswordSchema = exports.UserUpdateSchema = exports.UserRequestSchema = exports.AddressReturnSchema = exports.UserReturnSchema = void 0;
const zod_1 = require("zod");
const CreatedAddressSchema = zod_1.z.object({
    zip_code: zod_1.z.string().length(8),
    city: zod_1.z.string().max(50),
    state: zod_1.z.string().length(2),
    street: zod_1.z.string().max(127),
    number: zod_1.z.string().max(20).optional().default("null"),
    complement: zod_1.z.string().max(127).optional().default("null")
});
const UserSchema = zod_1.z.object({
    id: zod_1.z.string().uuid(),
    email: zod_1.z.string().email(),
    name: zod_1.z.string().max(50),
    cpf: zod_1.z.string().length(11),
    phone: zod_1.z.string().length(13),
    birth_date: zod_1.z.string(),
    description: zod_1.z.string(),
    password: zod_1.z.string(),
    is_seller: zod_1.z.boolean(),
    address: CreatedAddressSchema,
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
    deletedAt: zod_1.z.date().nullable(),
});
const UserRequestSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    name: zod_1.z.string().max(50),
    cpf: zod_1.z.string().length(11),
    phone: zod_1.z.string().length(13),
    birth_date: zod_1.z.string(),
    description: zod_1.z.string(),
    password: zod_1.z.string(),
    is_seller: zod_1.z.boolean(),
    address: CreatedAddressSchema,
});
exports.UserRequestSchema = UserRequestSchema;
const AddressReturnSchema = zod_1.z.object({
    id: zod_1.z.string().uuid(),
    zip_code: zod_1.z.string().length(8),
    city: zod_1.z.string().max(50),
    state: zod_1.z.string().length(2),
    street: zod_1.z.string().max(127),
    number: zod_1.z.string().max(20).optional(),
    complement: zod_1.z.string().max(127).optional(),
});
exports.AddressReturnSchema = AddressReturnSchema;
const UserReturnSchema = UserSchema.omit({
    password: true
});
exports.UserReturnSchema = UserReturnSchema;
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
}).partial();
exports.UserUpdateSchema = UserUpdateSchema;
const SendEmailSchema = zod_1.z.object({
    email: zod_1.z.string().email()
});
exports.SendEmailSchema = SendEmailSchema;
const RecoveryPasswordSchema = zod_1.z.object({
    password: zod_1.z.string()
});
exports.RecoveryPasswordSchema = RecoveryPasswordSchema;
const listAllUserSchemas = zod_1.z.array(UserReturnSchema);
exports.listAllUserSchemas = listAllUserSchemas;
