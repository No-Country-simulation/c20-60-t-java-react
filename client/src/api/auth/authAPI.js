import { envs } from '@/config/envs'
import { buildRequest } from '@/utils/buildRequest'

const ENDPOINT = envs.BASE_API_URL + '/api/auth'

export const authAPI = {
  async register(data) {
    return fetch(ENDPOINT + '/register', buildRequest(data)).then((response) => response.json())
  },
  async login(data) {
    return fetch(ENDPOINT + `/login`, buildRequest(data))
  },
  async logout() {
    return fetch(ENDPOINT + `/logout`, { method: 'POST' })
  }
}
