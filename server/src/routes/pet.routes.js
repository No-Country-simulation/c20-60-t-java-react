import { authenticate } from '../config/jwt.config.js'
import PetController from '../controllers/pet.controller.js'

const AllMyPetRoutes = (app) => {
  app.get('/api/pets/', PetController.findAllPets)
  app.get('/api/pets/:id', PetController.findOneSinglePet)
  app.put('/api/pets/update/:id', authenticate, PetController.updateExistingPet)
  app.post('/api/pets/new', authenticate, PetController.createNewPet)
  app.delete('/api/pets/delete/:id', authenticate, PetController.deleteAnExistingPet)
}

export default AllMyPetRoutes
