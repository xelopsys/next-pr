import z from 'zod';

export const loginValidation = z.object({
  email: z.string().email(),
});

export type LoginScreenValidationType = z.infer<typeof loginValidation>;
