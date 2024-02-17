import z from 'zod';

const configSchema = z.object({
  env: z.string().trim().min(1),
});

const config = configSchema.parse({
  env: process.env.APP_ENV,
});

export const { env } = config;
