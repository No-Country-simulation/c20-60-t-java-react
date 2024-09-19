import Request from '../models/request.model.js'
import PetModel from '../models/pet.model.js'

const findAllRequests = (req, res) => {
  Request.find()
    .populate('pet')
    .then((allRequests) => res.json({ requests: allRequests }))
    .catch((err) => res.status(400).json({ message: 'Something went wrong', error: err }))
}

const findAllRequestsForPet = (req, res) => {
  const { id } = req.params
  Request.find({ pet: { _id: id } })
    .then((allRequests) => res.json({ requests: allRequests }))
    .catch((err) => res.status(400).json({ message: 'Something went wrong', error: err }))
}

const findOneSingleRequest = (req, res) => {
  Request.findOne({ _id: req.params.id })
    .then((oneSinglePet) => res.json({ Request: oneSinglePet }))
    .catch((err) => res.status(400).json({ message: 'Something went wrong', error: err }))
}

const createNewRequest = (req, res) => {
  Request.create(req.body)
    .then((newlyCreatedRequest) => res.json({ Request: { id: newlyCreatedRequest._id } }))
    .catch((err) => res.status(400).json({ message: 'Something went wrong', error: err }))
}

const deleteAnExistingRequest = (req, res) => {
  Request.deleteOne({ _id: req.params.id })
    .then((result) => res.json({ result }))
    .catch((err) => res.status(400).json({ message: 'Something went wrong', error: err }))
}

export default {
  findAllRequests,
  findOneSingleRequest,
  createNewRequest,
  deleteAnExistingRequest,
  findAllRequestsForPet
}
