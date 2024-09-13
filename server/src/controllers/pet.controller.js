import Pet from '../models/pet.model.js'

const findAllPets = (req, res) => {
  Pet.find()
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
  // Obtener el token de la cookie o el encabezado Authorization
  const token = req.cookies.usertoken || req.headers.authorization?.split(' ')[1]
  if (!token) {
    return res.status(403).json({ message: 'No token provided' })
  }
  // Verificar el JWT
  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Failed to authenticate token' })
    }
    // `decoded` contiene la información del usuario
    const shelterUserId = decoded._id // Extraer el ID del usuario (refugio)
    // Crear los datos de la mascota con el `shelterUser`
    const petData = { ...req.body, shelterUser: shelterUserId }
    Pet.create(petData)
      .then((newlyCreatedPet) => res.json({ pet: { id: newlyCreatedPet._id } }))
      .catch((err) => res.status(400).json({ message: 'Something went wrong', error: err }))
  })
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
