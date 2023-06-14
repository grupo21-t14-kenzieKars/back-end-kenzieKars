import { z } from "zod"
import { AddressReturnSchema, UserRequestSchema, UserReturnSchema, UserUpdateSchema } from '../../schemas/user.schema'

type IAddress = z.infer<typeof AddressReturnSchema>
type IUserRequest = z.infer<typeof UserRequestSchema>
type IUserReturn = z.infer<typeof UserReturnSchema>
type IUserUpdate = z.infer<typeof UserUpdateSchema>

export { IAddress, IUserRequest, IUserReturn, IUserUpdate }