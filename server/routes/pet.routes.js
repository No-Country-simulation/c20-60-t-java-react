import { authenticate } from '../config/jwt.config.js'
import { findAllPets, findOneSinglePet, createNewPet, updateExistingPet, deleteAnExistingPet } from '../controllers/pet.controller.js'

export default function AllMyPetRoutes(app) {
  app.get('/api/pets/', findAllPets)
  app.get('/api/pets/:id', findOneSinglePet)
  app.put('/api/pets/update/:id', updateExistingPet)
  app.post('/api/pets/new', authenticate, createNewPet)
  app.delete('/api/pets/delete/:id', deleteAnExistingPet)
}
