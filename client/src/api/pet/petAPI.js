import { envs } from '@/config/envs'
import { buildRequest } from '@/utils/buildRequest'
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
    return fetch(ENDPOINT + `/new`, buildRequest(data)).then((response) => response.json())
  },
  async update(id, data) {
    return fetch(ENDPOINT + `/update/` + id, buildRequest(data, 'PUT')).then((response) => {
      if (!response.ok) {
        throw new Error('Error al alctualizar el estado de la mascota')
      }
      return response.json()
    })
  }
}
