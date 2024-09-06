import PETS from '@/data/pets.json'

export const petDevAPI = {
  async getAll() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(PETS)
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
