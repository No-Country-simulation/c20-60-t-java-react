import PetController from '../controllers/pet.controller.js'
import { authenticate } from '../middlewares/jwt.middleware.js'

const AllMyPetRoutes = (app) => {
  app.get('/api/pets/', authenticate, PetController.findAllPets)
  app.get('/api/pets/:query', PetController.findPetsWithQuery)
  app.put('/api/pets/update/:id', authenticate, PetController.updateExistingPet)
  app.post('/api/pets/new', authenticate, PetController.createNewPet)
  app.delete('/api/pets/delete/:id', authenticate, PetController.deleteAnExistingPet)
}

export default AllMyPetRoutes
