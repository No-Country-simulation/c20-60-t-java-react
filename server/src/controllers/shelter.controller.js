import Shelter from '../models/shelter.model.js'

const findAllShelters = (req, res) => {
  Shelter.find()
    .then((allDaShelters) => res.json({ shelters: allDaShelters }))
    .catch((err) => res.status(400).json({ message: 'Something went wrong', error: err }))
}

const findOneSingleShelter = (req, res) => {
  Shelter.findOne({ _id: req.params.id })
    .then((oneSingleShelter) => res.json({ shelter: oneSingleShelter }))
    .catch((err) => res.status(400).json({ message: 'Something went wrong', error: err }))
}

const createNewShelter = (req, res) => {
  Shelter.create(req.body)
    .then((newlyCreatedShelter) => res.json({ shelter: { id: newlyCreatedShelter._id } }))
    .catch((err) => res.status(400).json({ message: 'Something went wrong', error: err }))
}

const updateExistingShelter = (req, res) => {
  Shelter.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((updatedShelter) => res.json({ shelter: updatedShelter }))
    .catch((err) => res.status(400).json({ message: 'Something went wrong', error: err }))
}

const deleteAnExistingShelter = (req, res) => {
  Shelter.deleteOne({ _id: req.params.id })
    .then((result) => res.json({ result }))
    .catch((err) => res.status(400).json({ message: 'Something went wrong', error: err }))
}

export default {
  findAllShelters,
  findOneSingleShelter,
  createNewShelter,
  updateExistingShelter,
  deleteAnExistingShelter
}
