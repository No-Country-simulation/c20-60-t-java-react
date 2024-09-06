import UserController from '../controllers/user.controller.js'

const AllMyUserRoutes = (app) => {
  app.post('/api/auth/register', UserController.register)
  app.post('/api/auth/login', UserController.login)
  app.post('/api/auth/logout', UserController.logout)
}

export default AllMyUserRoutes
