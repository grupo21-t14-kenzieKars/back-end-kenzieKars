import z from 'zod'
import { UserReturnSchema } from "./user.schema";

export const carCommentSchema = z.object({
    content: z.string().min(5).max(512)
})

export const carCommentReturnSchema = carCommentSchema.extend({
    id: z.string(),
    createdAt: z.date().nullish(),
    updatedAt: z.date().nullish(),
})

export const carCommentsWithUserSchema = carCommentReturnSchema.extend({
    // user: z.object({
    //     id: z.string(),
    //     name: z.string(),
    // })
    user: UserReturnSchema.omit({
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
})

export const carCommentListSchema = z.array(carCommentsWithUserSchema)