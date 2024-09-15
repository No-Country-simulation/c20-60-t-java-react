import ShelterController from '../controllers/shelter.controller.js'

const AllMyShelterRoutes = (app) => {
  app.post('/api/auth/register', ShelterController.register)
  app.post('/api/auth/login', ShelterController.login)
  app.post('/api/auth/logout', ShelterController.logout)
}

export default AllMyShelterRoutes
