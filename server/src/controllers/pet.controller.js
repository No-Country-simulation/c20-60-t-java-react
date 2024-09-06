import Pet from '../models/pet.model.js'

export const findAllPets = (req, res) => {
  Pet.find()
    .then((allDaPets) => res.json({ pets: allDaPets }))
    .catch((err) => res.status(400).json({ message: 'Something went wrong', error: err }))
}

export const findOneSinglePet = (req, res) => {
  Pet.findOne({ _id: req.params.id })
    .then((oneSinglePet) => res.json({ pet: oneSinglePet }))
    .catch((err) => res.status(400).json({ message: 'Something went wrong', error: err }))
}

export const createNewPet = (req, res) => {
  Pet.create(req.body)
    .then((newlyCreatedPet) => res.json({ pet: newlyCreatedPet }))
    .catch((err) => res.status(400).json({ message: 'Something went wrong', error: err }))
}

export const updateExistingPet = (req, res) => {
  Pet.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((updatedPet) => res.json({ pet: updatedPet }))
    .catch((err) => res.status(400).json({ message: 'Something went wrong', error: err }))
}

export const deleteAnExistingPet = (req, res) => {
  Pet.deleteOne({ _id: req.params.id })
    .then((result) => res.json({ result }))
    .catch((err) => res.status(400).json({ message: 'Something went wrong', error: err }))
}
