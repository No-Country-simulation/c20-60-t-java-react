import mongoose from 'mongoose'

const PetSchema = new mongoose.Schema(
  {
    imgURL: {
      type: String
    },
    name: {
      type: String,
      required: [true, 'Name is required']
    },
    species: {
      type: String,
      required: [true, 'Species is required']
    },
    birthDate: {
      type: Number,
      required: [true, 'Age is required']
    },
    breed: {
      type: String,
      required: [true, 'Breed is required']
    },
    size: {
      type: String,
      required: [true, 'Size is required']
    },
    sex: {
      type: String,
      required: [true, 'Sex is required']
    },
    color: {
      type: String,
      required: [true, 'Color is required']
    },
    description: {
      type: String,
      required: [true, 'Description is required']
    },
    labels: {
      type: [String],
      required: [true, 'Labels are required']
    },
    sterilized: {
      type: Boolean
    },
    vaccinated: {
      type: Boolean
    }
  },
  { timestamps: true }
)

const Pet = mongoose.model('Pet', PetSchema)

export default Pet
