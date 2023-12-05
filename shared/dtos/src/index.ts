import { z } from 'zod';
import { COUNTRIES } from '@pathway-up/constants';

import { password } from './validators';

export const AuthUserDtoSchema = z
  .object({
    email: z.string().email(),
    password: password(),
  })
  .required();

export type AuthUserDto = z.infer<typeof AuthUserDtoSchema>;

export const ConfirmationPayloadSchema = z
  .object({
    confirmationHash: z.string(),
  })
  .required();

export type ConfirmationPayload = z.infer<typeof ConfirmationPayloadSchema>;

export const AuthPayloadSchema = z
  .object({
    userId: z.number(),
  })
  .required();

export type AuthPayload = z.infer<typeof AuthPayloadSchema>;

export const UserDtoSchema = z
  .object({
    name: z.string().max(20),
    bio: z.string().max(255),
    countryCode: z.nativeEnum(COUNTRIES),
    birthday: z.string().datetime().pipe(z.coerce.date()),
  });

export type UserDto = z.infer<typeof UserDtoSchema>;

export const UserPartialDtoSchema = UserDtoSchema.partial();

export type UserPartialDto = z.infer<typeof UserPartialDtoSchema>;
