import PETS from '@/data/pets.json'
import { filterPets } from '@/utils/filterPets'

export const petDevAPI = {
  async getAll(filters) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(filterPets(PETS, filters))
      }, 2000)
    })
  },
  async getOne({ id }) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const pet = PETS.find((res) => res.id === id)
        resolve(pet)
      }, 2000)
    })
  }
}
