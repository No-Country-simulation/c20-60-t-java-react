import { uploadImage } from '../config/cloudinary.config.js'
import Pet from '../models/pet.model.js'
import ShelterModel from '../models/shelter.model.js'
import 'dotenv/config'

const findAllPets = (req, res) => {
  const shelterId = req.shelterId // geting shelterId from jwt middelware
  Pet.find({ shelter: shelterId })
    .then((allDaPets) => res.json({ pets: allDaPets }))
    .catch((err) => res.status(400).json({ message: 'Something went wrong', error: err }))
}

const findOneSinglePet = (req, res) => {
  const { query } = req.params
  Pet.findOne({ _id: query })
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
  const { query } = req.params
  if (query === 'true') findAllAdoptablePets(req, res)
  else findOneSinglePet(req, res)
}

const uploadImageToCloudinary = async (imgBase64Array) => {
  try {
    // Map the base64 images to an array of upload promises
    const cloudinaryURLs = await Promise.all(
      imgBase64Array.map(async (imgBase64) => {
        try {
          return await uploadImage(imgBase64)
        } catch (error) {
          console.error(error)
          throw new Error('Image upload failed')
        }
      })
    )
    return cloudinaryURLs // Return an array of URLs from Cloudinary
  } catch (error) {
    console.error('Error in uploading images to Cloudinary:', error)
    throw error
  }
}

const createNewPet = async (req, res) => {
  const shelterId = req.shelterId // geting shelterId from jwt middelware
  const petData = { ...req.body, shelter: shelterId } // Crear los datos de la mascota con el `shelter`
  const imgBase64Array = petData.imgURL

  try {
    const cloudinaryURLs = process.env.MODE !== 'DEV' ? await uploadImageToCloudinary(imgBase64Array) : 'prueba'

    petData.imgURL = cloudinaryURLs // Assign the Cloudinary URLs to the pet data

    // Create the new pet
    const newlyCreatedPet = await Pet.create(petData)

    // Add the new pet's ID to the shelter's pets array using $push
    await ShelterModel.findByIdAndUpdate({ _id: shelterId }, { $push: { pets: newlyCreatedPet._id } }, { new: true })

    // Respond with the newly created pet's ID
    res.json({ pet: { id: newlyCreatedPet._id } })
  } catch (error) {
    res.status(400).json({ message: 'Something went wrong', error: error.message })
  }
}

const updateExistingPet = async (req, res) => {
  const { id } = req.params
  const hasImgBase64Array = req.body.imgURL?.length > 0

  try {
    if (hasImgBase64Array) {
      const imgBase64Array = req.body.imgURL
      const cloudinaryURLs = await uploadImageToCloudinary(imgBase64Array)
      req.body.imgURL = cloudinaryURLs // Assign the Cloudinary URLs to the pet data
    }

    const updatedPet = await Pet.findOneAndUpdate({ _id: id }, req.body, { new: true })

    res.json({ pet: updatedPet })
  } catch (error) {
    res.status(400).json({ message: 'Something went wrong', error: error.message })
  }
}

const deleteAnExistingPet = async (req, res) => {
  const { id } = req.params
  const shelterId = req.shelterId // geting shelterId from jwt middelware
  try {
    // Remove the pet ID from the shelter's pets array using $pull
    await ShelterModel.findByIdAndUpdate({ _id: shelterId }, { $pull: { pets: id } }, { new: true })

    // Delete the pet from the Pet collection
    const result = await Pet.deleteOne({ _id: id })

    // Return the result of the deletion
    res.json({ result })
  } catch (error) {
    res.status(400).json({ message: 'Something went wrong', error: error.message })
  }
}

export default {
  findAllPets,
  findPetsWithQuery,
  createNewPet,
  updateExistingPet,
  deleteAnExistingPet
}
