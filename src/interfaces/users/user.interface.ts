import { z } from "zod"
import { AddressReturnSchema, RecoveryPasswordSchema, SendEmailSchema, UserRequestSchema, UserReturnSchema } from '../../schemas/user.schema'
import { DeepPartial } from "typeorm"

type IAddress = z.infer<typeof AddressReturnSchema>
type IUserRequest = z.infer<typeof UserRequestSchema>
type IUserReturn = z.infer<typeof UserReturnSchema>
type IUserUpdate = DeepPartial<IUserRequest>
type IUserRecovery = z.infer<typeof RecoveryPasswordSchema>
type IUserSendEmail = z.infer<typeof SendEmailSchema>
export { IAddress, IUserRequest, IUserReturn, IUserUpdate, IUserRecovery, IUserSendEmail }