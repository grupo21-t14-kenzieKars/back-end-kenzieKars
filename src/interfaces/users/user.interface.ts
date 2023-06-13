import { z } from 'zod'
import { AddressReturnSchema, UserDataSchema, UserReturnSchema, UserUpdateSchema } from '../../schemas/user.schema'

type IAddress = z.infer<typeof AddressReturnSchema>
type IUserData = z.infer<typeof UserDataSchema>
type IUserReturn = z.infer<typeof UserReturnSchema>
type IUserUpdate = z.infer<typeof UserUpdateSchema>

export { IAddress, IUserData, IUserReturn, IUserUpdate }