import z from 'zod';

const configSchema = z.object({
  appUrl: z.string().trim().min(1),
  apiUrl: z.string().trim().min(1),
});

const config = configSchema.parse({
  env: process.env.APP_ENV,
  appUrl: process.env.NEXT_PUBLIC_APP_URL,
  apiUrl: process.env.NEXT_PUBLIC_API_URL,
});

export const { appUrl, apiUrl } = config;
