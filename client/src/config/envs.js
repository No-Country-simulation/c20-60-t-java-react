import { z } from 'zod'

const envsSchema = z.object({
  BASE_API_URL: z.string().url()
})

export const envs = envsSchema.parse({
  BASE_API_URL: import.meta.env.VITE_BASE_API_URL
})
