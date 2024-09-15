import Pet from '../models/pet.model.js'
import ShelterModel from '../models/shelter.model.js'

const findAllPets = (req, res) => {
  const shelterId = req.shelterId // geting shelterId from verifyToken middelware
  Pet.find({ shelter: shelterId })
    .then((allDaPets) => res.json({ pets: allDaPets }))
    .catch((err) => res.status(400).json({ message: 'Something went wrong', error: err }))
}

const findOneSinglePet = (req, res) => {
  Pet.findOne({ _id: req.params.query })
    .populate('shelter', '-password -createdAt -updatedAt -__v -pets') // Poblar la referencia al refugio
    .then((oneSinglePet) => res.json({ pet: oneSinglePet }))
    .catch((err) => res.status(400).json({ message: 'Something went wrong', error: err }))
}

const findAllAdoptablePets = (req, res) => {
  Pet.find({ availableForAdoption: true })
    .then((allAdoptablePets) => res.json({ pets: allAdoptablePets }))
    .catch((err) => res.status(400).json({ message: 'Something went wrong', error: err }))
}

const findPetsWithQuery = (req, res) => {
  if (req.params.query === 'true') findAllAdoptablePets(req, res)
  else findOneSinglePet(req, res)
}

const createNewPet = (req, res) => {
  const shelterId = req.shelterId // geting shelterId from verifyToken middelware
  const petData = { ...req.body, shelter: shelterId } // Crear los datos de la mascota con el `shelter`
  Pet.create(petData)
    .then((newlyCreatedPet) => {
      // Saving pets on shelter data
      ShelterModel.findById(shelterId).then((shelter) => {
        const shelterPets = shelter.pets
        ShelterModel.findByIdAndUpdate({ _id: shelterId }, { pets: [...shelterPets, newlyCreatedPet._id] }).catch((err) =>
          res.status(400).json({ message: 'Something went wrong', error: err })
        )
      })
      res.json({ pet: { id: newlyCreatedPet._id } }) // Creating new pet
    })
    .catch((err) => res.status(400).json({ message: 'Something went wrong', error: err }))
}
const updateExistingPet = (req, res) => {
  Pet.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((updatedPet) => res.json({ pet: updatedPet }))
    .catch((err) => res.status(400).json({ message: 'Something went wrong', error: err }))
}

const deleteAnExistingPet = (req, res) => {
  const shelterId = req.shelterId // geting shelterId from verifyToken middelware

  ShelterModel.findById(shelterId).then((shelter) => {
    const shelterPets = shelter.pets
    const petToDeleteIndex = shelterPets.indexOf(req.params.id)
    if (petToDeleteIndex > -1) shelterPets.splice(petToDeleteIndex, 1)
    ShelterModel.findByIdAndUpdate({ _id: shelterId }, { pets: shelterPets }).catch((err) =>
      res.status(400).json({ message: 'Something went wrong', error: err })
    )
  })
  Pet.deleteOne({ _id: req.params.id })
    .then((result) => res.json({ result }))
    .catch((err) => res.status(400).json({ message: 'Something went wrong', error: err }))
}

export default {
  findAllPets,
  findPetsWithQuery,
  createNewPet,
  updateExistingPet,
  deleteAnExistingPet
}
