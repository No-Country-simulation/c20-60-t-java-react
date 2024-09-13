import Pet from '../models/pet.model.js'

const findAllPets = (req, res) => {
  let querys
  if (req.query.adoptable) querys = { availableForAdoption: req.query.adoptable }

  Pet.find(querys)
    .then((allDaPets) => res.json({ pets: allDaPets }))
    .catch((err) => res.status(400).json({ message: 'Something went wrong', error: err }))
}

const findOneSinglePet = (req, res) => {
  Pet.findOne({ _id: req.params.id })
    .populate('shelter') // Poblar la referencia al refugio
    .then((oneSinglePet) => res.json({ pet: oneSinglePet }))
    .catch((err) => res.status(400).json({ message: 'Something went wrong', error: err }))
}

const createNewPet = (req, res) => {
  const shelterId = req.params.shelterId
  const petData = { ...req.body, shelter: shelterId }
  Pet.create(petData)
    .then((newlyCreatedPet) => res.json({ pet: { id: newlyCreatedPet._id } }))
    .catch((err) => res.status(400).json({ message: 'Something went wrong', error: err }))
}

const updateExistingPet = (req, res) => {
  Pet.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((updatedPet) => res.json({ pet: updatedPet }))
    .catch((err) => res.status(400).json({ message: 'Something went wrong', error: err }))
}

const deleteAnExistingPet = (req, res) => {
  Pet.deleteOne({ _id: req.params.id })
    .then((result) => res.json({ result }))
    .catch((err) => res.status(400).json({ message: 'Something went wrong', error: err }))
}

export default {
  findAllPets,
  findOneSinglePet,
  createNewPet,
  updateExistingPet,
  deleteAnExistingPet
}
