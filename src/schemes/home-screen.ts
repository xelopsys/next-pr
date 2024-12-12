import z from 'zod';

export const homeValidation = z.object({
  email: z.string().email(),
});

export type HomeScreenValidationType = z.infer<typeof homeValidation>;
