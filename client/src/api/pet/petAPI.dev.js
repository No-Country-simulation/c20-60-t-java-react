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
  },
  async create({ data }) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve()
      }, 2000)
    })
  },
  async update(id, data) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve()
      }, 2000)
    })
  }
}
