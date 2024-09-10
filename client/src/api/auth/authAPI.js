import { envs } from '@/config/envs'

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

function buildRequest(data) {
  return {
    method: 'POST',
    body: JSON.stringify(data),
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    }
  }
}
