const PetController = require('../controllers/pet.controller')
const upload = require('../upload')
module.exports = (app) => {
  app.get('/api/pets/', PetController.findAllPets)
  app.get('/api/pets/:id', PetController.findOneSinglePet)
  app.put('/api/pets/update/:id', upload.single('image'), PetController.updateExistingPet)
  app.post('/api/pets/new', upload.single('image'), PetController.createNewPet)
  app.delete('/api/pets/delete/:id', PetController.deleteAnExistingPet)
}
