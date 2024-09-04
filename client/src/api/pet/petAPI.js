import { envs } from '@/config/envs'
import { buildQuery } from '@/utils/buildQuery'

const ENDPOINT = envs.BASE_API_URL + '/pets'

export const petAPI = {
  async getAll(filters) {
    return fetch(ENDPOINT + buildQuery(filters)).then((response) => response.json())
  },
  async getOne({ id }) {
    return fetch(ENDPOINT + `/${id}`).then((response) => response.json())
  }
}
