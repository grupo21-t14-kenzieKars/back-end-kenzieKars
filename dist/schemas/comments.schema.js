"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.carCommentListSchema = exports.carCommentsWithUserSchema = exports.carCommentReturnSchema = exports.carCommentSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const user_schema_1 = require("./user.schema");
exports.carCommentSchema = zod_1.default.object({
    content: zod_1.default.string().min(5).max(512)
});
exports.carCommentReturnSchema = exports.carCommentSchema.extend({
    id: zod_1.default.string(),
    createdAt: zod_1.default.date().nullish(),
    updatedAt: zod_1.default.date().nullish(),
});
exports.carCommentsWithUserSchema = exports.carCommentReturnSchema.extend({
    // user: z.object({
    //     id: z.string(),
    //     name: z.string(),
    // })
    user: user_schema_1.UserReturnSchema.omit({
        email: true,
        cpf: true,
        phone: true,
        birth_date: true,
        description: true,
        password: true,
        is_seller: true,
        address: true,
        createdAt: true,
        updatedAt: true,
        deletedAt: true
    })
});
exports.carCommentListSchema = zod_1.default.array(exports.carCommentsWithUserSchema);
