import express from 'express'

const app = express()

let allPets = [
  { id: 1, name: 'Perro1', age: 3, breed: 'Golden', size: 'Grande', sex: 'Hembra', color: 'Dorado', sterilized: false, vaccinated: false },
  { id: 2, name: 'Perro2', age: 7, breed: 'Criollo', size: 'Grande', sex: 'Macho', color: 'Blanco y negro', sterilized: true, vaccinated: true },
  { id: 3, name: 'Perro3', age: 5, breed: 'Labrador', size: 'Grande', sex: 'Macho', color: 'Chocolate', sterilized: false, vaccinated: false },
  { id: 4, name: 'Gato1', age: 2, breed: 'Persa', size: 'Pequeño', sex: 'Hembra', color: 'Naranja', sterilized: false, vaccinated: false },
  { id: 5, name: 'Gato2', age: 10, breed: 'Egipcio', size: 'Pequeño', sex: 'Macho', color: 'No aplica', sterilized: false, vaccinated: false },
  { id: 6, name: 'Gato3', age: 5, breed: 'Criollo', size: 'Pequeño', sex: 'Hembra', color: 'Gris', sterilized: true, vaccinated: false }
]

app.get('/', (request, response) => {
  response.send('<h1>Pawsome-Friends<h1/>')
})

app.get('/pet', (request, response) => {
  response.json(allPets)
})

app.get('/pet/:id', (request, response) => {
  const id = Number(request.params.id)
  const singlePet = allPets.find((pet) => pet.id === id)
  if (singlePet) response.json(singlePet)
  else response.status(404).end()
})

app.delete('/pet/:id', (request, response) => {
  const id = Number(request.params.id)
  allPets = allPets.filter((pet) => pet.id !== id)
  response.status(204).end()
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
