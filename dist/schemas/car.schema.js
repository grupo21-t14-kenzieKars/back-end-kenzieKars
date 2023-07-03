"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.carCreateReturnSchema = exports.listCarByUserEschema = exports.listCarEschema = exports.carSchema = exports.carRequestSchema = void 0;
const zod_1 = require("zod");
const imagesSchema = zod_1.z.object({
    one: zod_1.z.string(),
    two: zod_1.z.string().nullable().default(null),
    three: zod_1.z.string().nullable().default(null),
    four: zod_1.z.string().nullable().default(null),
    five: zod_1.z.string().nullable().default(null),
    six: zod_1.z.string().nullable().default(null),
});
const carRequestSchema = zod_1.z.object({
    brand: zod_1.z.string(),
    model: zod_1.z.string(),
    year: zod_1.z.string(),
    fuel_type: zod_1.z.string(),
    color: zod_1.z.string(),
    kilometers: zod_1.z.number(),
    fipe_price: zod_1.z.number(),
    price: zod_1.z.number(),
    description: zod_1.z.string(),
    images: imagesSchema,
});
exports.carRequestSchema = carRequestSchema;
const CarOwner = zod_1.z.object({
    name: zod_1.z.string(),
    id: zod_1.z.string(),
    description: zod_1.z.string(),
});
const carCreateReturnSchema = carRequestSchema.extend({
    id: zod_1.z.string(),
    updatedAt: zod_1.z.string().nullish(),
    createdAt: zod_1.z.string().nullish(),
    user: zod_1.z.object({
        id: zod_1.z.string(),
    }),
});
exports.carCreateReturnSchema = carCreateReturnSchema;
const carSchema = carRequestSchema.extend({
    id: zod_1.z.string(),
    updatedAt: zod_1.z.string().nullish(),
    createdAt: zod_1.z.string().nullish(),
    user: CarOwner,
});
exports.carSchema = carSchema;
const listCarByUserEschema = zod_1.z.object({
    name: zod_1.z.string().max(50),
    description: zod_1.z.string(),
    cars: carSchema.array(),
});
exports.listCarByUserEschema = listCarByUserEschema;
const listCarEschema = zod_1.z.array(carSchema);
exports.listCarEschema = listCarEschema;
