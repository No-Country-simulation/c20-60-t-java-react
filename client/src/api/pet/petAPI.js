import { envs } from '@/config/envs'

const ENDPOINT = envs.BASE_API_URL + '/pets'

export const petAPI = {
  async getAll() {
    return fetch(ENDPOINT).then((response) => response.json())
  },
  async getOne({ id }) {
    return fetch(ENDPOINT + `/${id}`).then((response) => response.json())
  }
}
