import { envs } from '@/config/envs'
import { buildRequest, buildAuthGETRequest } from '@/utils/buildRequest'
import { convertDateToUnix } from '@/utils/convertDateToUnix'
import { mapPet } from './mapper'

let ENDPOINT = envs.BASE_API_URL + '/api/pets'

export const petAPI = {
  async getAll() {
    try {
      const response = await fetch(ENDPOINT, buildAuthGETRequest())

      if (!response.ok) {
        throw new Error('Failed to fetch pets')
      }

      const data = await response.json() // Wait for the JSON data
      return data.pets.map((pet) => mapPet(pet)) // Process the pets
    } catch (error) {
      console.error('Error fetching pets:', error) // Handle errors
    }
  },
  async getAllAdoptable() {
    return fetch(`${ENDPOINT}/true`)
      .then((response) => response.json())
      .then((response) => response.pets.map((pet) => mapPet(pet)))
  },
  async getOne({ id }) {
    return fetch(ENDPOINT + `/${id}`)
      .then((response) => response.json())
      .then((response) => mapPet(response.pet))
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
