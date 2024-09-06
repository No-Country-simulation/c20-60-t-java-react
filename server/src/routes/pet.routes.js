import { authenticate } from '../config/jwt.config.js'
import { createNewPet, deleteAnExistingPet, findAllPets, findOneSinglePet, updateExistingPet } from '../controllers/pet.controller.js'
// import { specs, swaggerUi } from '../controllers/swagger.controller.js'

export default function AllMyPetRoutes(app) {
  app.get('/api/pets/', findAllPets)
  app.get('/api/pets/:id', findOneSinglePet)
  app.put('/api/pets/update/:id', authenticate, updateExistingPet)
  app.post('/api/pets/new', authenticate, createNewPet)
  app.delete('/api/pets/delete/:id', authenticate, deleteAnExistingPet)
  // app.get('/', swaggerUi.serve, swaggerUi.setup(specs))
}
