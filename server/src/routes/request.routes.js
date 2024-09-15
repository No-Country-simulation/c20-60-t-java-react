import { authenticate } from '../config/jwt.config.js'
import RequestController from '../controllers/request.controller.js'

const AllMyRequestRoutes = (app) => {
  app.get('/api/requests/', RequestController.findAllRequests)
  app.get('/api/requests/pet/:id', RequestController.findAllRequestsForPet)
  app.post('/api/requests/new', RequestController.createNewRequest)
  app.delete('/api/requests/delete/:id', authenticate, RequestController.deleteAnExistingRequest)
}

export default AllMyRequestRoutes
