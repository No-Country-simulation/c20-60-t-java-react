import { Router } from 'express'
import { findAllPets, findOneSinglePet, createNewPet, updateExistingPet, deleteAnExistingPet } from '../controllers/pet.controller.js'

const router = Router()

router.get('/api/pets/', findAllPets)
router.get('/api/pets/:id', findOneSinglePet)
router.put('/api/pets/update/:id', updateExistingPet)
router.post('/api/pets/new', createNewPet)
router.delete('/api/pets/delete/:id', deleteAnExistingPet)

export default router
