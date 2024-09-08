import { envs } from '@/config/envs'
import { petAPI as prod } from './petAPI'
import { petDevAPI as dev } from './petAPI.dev'

export const petAPI = envs.BACKEND || envs.MODE === 'production' ? prod : dev
