import { authenticate } from '../config/jwt.config.js'
import ShelterController from '../controllers/shelter.controller.js'

const AllMyShelterRoutes = (app) => {
  app.get('/api/shelters/', ShelterController.findAllShelters)
  app.get('/api/shelters/:id', ShelterController.findOneSingleShelter)
  app.put('/api/shelters/update/:id', authenticate, ShelterController.updateExistingShelter)
  app.post('/api/shelters/new', authenticate, ShelterController.createNewShelter)
  app.delete('/api/shelters/delete/:id', authenticate, ShelterController.deleteAnExistingShelter)
}

export default AllMyShelterRoutes
