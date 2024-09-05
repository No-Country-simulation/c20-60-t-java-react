const PetController = require('../controllers/pet.controller.js')

module.exports = (app) => {
  app.get('/api/pets/', PetController.findAllPets)
  app.get('/api/pets/:id', PetController.findOneSinglePet)
  app.put('/api/pets/update/:id', PetController.updateExistingPet)
  app.post('/api/pets/new', PetController.createNewPet)
  app.delete('/api/pets/delete/:id', PetController.deleteAnExistingPet)
}
