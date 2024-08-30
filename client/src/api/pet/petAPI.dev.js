const URL = 'http://localhost:5173/src/data/pets.json'

export const petDevAPI = {
  async getAll() {
    return new Promise((resolve) => {
      setTimeout(() => {
        fetch(URL)
          .then((response) => response.json())
          .then((response) => resolve(response))
      }, 2000)
    })
  },
  async getOne({ id }) {
    return new Promise((resolve) => {
      setTimeout(() => {
        fetch(URL)
          .then((response) => response.json())
          .then((response) => response.find((res) => res.id === id))
          .then((response) => resolve(response))
      }, 2000)
    })
  }
}
