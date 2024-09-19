import { envs } from '@/config/envs'
import { buildRequest } from '@/utils/buildRequest'

const ENDPOINT = envs.BASE_API_URL + '/api/auth'

export const authAPI = {
  async register(data) {
    return fetch(ENDPOINT + '/register', buildRequest(data)).then((response) => response.json())
  },
  async login(data) {
    return fetch(ENDPOINT + `/login`, buildRequest(data))
      .then((response) => {
        if (!response.ok) {
          throw new Error('Invalid credentials')
        }
        return response
      })
      .then((response) => response.json())
      .catch((err) => {
        throw new Error('There was an internal error')
      })
  },
  async logout() {
    return fetch(ENDPOINT + `/logout`, { method: 'POST' })
  }
}
