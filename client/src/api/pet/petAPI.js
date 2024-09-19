import { envs } from '@/config/envs'
import { buildRequest, buildAuthGETRequest } from '@/utils/buildRequest'
import { petMapper, petShelterMapper } from './petMapper'

let ENDPOINT = envs.BASE_API_URL + '/api/pets'

export const petAPI = {
  async getAll() {
    try {
      const response = await fetch(ENDPOINT, buildAuthGETRequest())

      if (!response.ok) {
        throw new Error('Failed to fetch pets')
      }

      const data = await response.json()
      return data.pets.map((pet) => petMapper(pet))
    } catch (error) {
      console.error('Error fetching pets:', error)
    }
  },
  async getAllAdoptable() {
    return fetch(ENDPOINT + '/true')
      .then((response) => response.json())
      .then((response) => {
        return response.pets.map((pet) => petMapper(pet))
      })
  },
  async getOne({ id }) {
    return fetch(ENDPOINT + `/${id}`)
      .then((response) => response.json())
      .then((response) => petShelterMapper(response.pet))
  },
  async create(data) {
    return fetch(ENDPOINT + `/new`, buildRequest(data)).then((response) => {
      if (!response.ok) {
        throw new Error('Error al crear la mascota')
      }
      return response.json()
    })
  },
  async delete(id) {
    return fetch(ENDPOINT + `/delete/` + id, buildRequest({}, 'DELETE')).then((response) => {
      if (!response.ok) {
        throw new Error('Error al eliminar la mascota')
      }
      return response.json()
    })
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
