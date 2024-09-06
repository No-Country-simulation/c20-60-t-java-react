import { envs } from '@/config/envs'
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
  }
}
