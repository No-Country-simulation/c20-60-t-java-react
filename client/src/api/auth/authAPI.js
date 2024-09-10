import { envs } from '@/config/envs'

const ENDPOINT = envs.BASE_API_URL + '/api/auth'

export const authAPI = {
  async register(data) {
    console.log(data)
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }

    return fetch(ENDPOINT + '/register', options).then((response) => response.json())
  },
  async login({ id }) {
    return fetch(ENDPOINT + `/${id}`).then((response) => response.json())
  }
}
