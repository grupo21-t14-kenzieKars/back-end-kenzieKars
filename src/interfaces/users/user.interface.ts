import { z } from "zod"
import { AddressReturnSchema, UserRequestSchema, UserReturnSchema } from '../../schemas/user.schema'
import { DeepPartial } from "typeorm"

type IAddress = z.infer<typeof AddressReturnSchema>
type IUserRequest = z.infer<typeof UserRequestSchema>
type IUserReturn = z.infer<typeof UserReturnSchema>
type IUserUpdate = DeepPartial<IUserRequest>

export { IAddress, IUserRequest, IUserReturn, IUserUpdate }