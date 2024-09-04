const mongoose = require('mongoose')

const PetSchema = new mongoose.Schema(
  {
    photo: {
      type: String
    },
    name: {
      type: String,
      required: [true, 'Name is required']
    },
    type: {
      type: String,
      required: [true, 'Type is required']
    },
    age: {
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

module.exports = Pet
