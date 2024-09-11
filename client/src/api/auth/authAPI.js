import { envs } from '@/config/envs'
import { buildPostRequest } from '@/utils/buildPostRequest'

const ENDPOINT = envs.BASE_API_URL + '/api/auth'

export const authAPI = {
  async register(data) {
    return fetch(ENDPOINT + '/register', buildPostRequest(data)).then((response) => response.json())
  },
  async login(data) {
    return fetch(ENDPOINT + `/login`, buildPostRequest(data))
  },
  async logout() {
    return fetch(ENDPOINT + `/logout`, { method: 'POST' })
  }
}
