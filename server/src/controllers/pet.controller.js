import jwt from 'jsonwebtoken'
import { secret } from '../config/jwt.config.js'
import Pet from '../models/pet.model.js'
import ShelterModel from '../models/shelter.model.js'

const findAllPets = (req, res) => {
  Pet.find()
    .then((allDaPets) => res.json({ pets: allDaPets }))
    .catch((err) => res.status(400).json({ message: 'Something went wrong', error: err }))
}

const findOneSinglePet = (req, res) => {
  if (req.params.id === 'true') {
    Pet.find({ availableForAdoption: req.params.id })
      .then((allAdoptablePets) => res.json({ pets: allAdoptablePets }))
      .catch((err) => res.status(400).json({ message: 'Something went wrong', error: err }))
  } else {
    Pet.findOne({ _id: req.params.id })
      .populate('shelter', '-password -createdAt -updatedAt -__v -pets') // Poblar la referencia al refugio
      .then((oneSinglePet) => res.json({ pet: oneSinglePet }))
      .catch((err) => res.status(400).json({ message: 'Something went wrong', error: err }))
  }
}

const createNewPet = (req, res) => {
  const token = req.cookies.sheltertoken || req.headers.authorization?.split(' ')[1] // Obtener el token de la cookie o el encabezado Authorization
  if (!token) {
    return res.status(403).json({ message: 'No token provided' })
  }
  // Verificar el JWT
  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Failed to authenticate token' })
    }
    const shelterId = decoded._id // `decoded` contiene la información del usuario y se extraer el ID del refugio
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
  })
}
const updateExistingPet = (req, res) => {
  Pet.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((updatedPet) => res.json({ pet: updatedPet }))
    .catch((err) => res.status(400).json({ message: 'Something went wrong', error: err }))
}

const deleteAnExistingPet = (req, res) => {
  const token = req.cookies.sheltertoken || req.headers.authorization?.split(' ')[1] // Obtener el token de la cookie o el encabezado Authorization
  if (!token) {
    return res.status(403).json({ message: 'No token provided' })
  }
  // Verificar el JWT
  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Failed to authenticate token' })
    }
    const shelterId = decoded._id // `decoded` contiene la información del usuario y se extraer el ID del refugio

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
  })
}

export default {
  findAllPets,
  findOneSinglePet,
  createNewPet,
  updateExistingPet,
  deleteAnExistingPet
}
