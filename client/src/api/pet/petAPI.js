import { envs } from '@/config/envs'
import { buildPostRequest } from '@/utils/buildPostRequest'
import { mapPet } from './mapper'

const ENDPOINT = envs.BASE_API_URL + '/api/pets'

export const petAPI = {
  async getAll() {
    return fetch(ENDPOINT)
      .then((response) => response.json())
      .then((response) => response.pets.map((pet) => mapPet(pet)))
  },
  async getOne({ id }) {
    return fetch(ENDPOINT + `/${id}`)
      .then((response) => response.json())
      .then((response) => mapPet(response.pet))
  },
  async create(data) {
    return fetch(ENDPOINT + `/new`, buildPostRequest(data)).then((response) => response.json())
  }
}
