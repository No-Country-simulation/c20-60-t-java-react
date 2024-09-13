import mongoose from 'mongoose'

const ShelterSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required']
    },
    address: {
      type: String,
      required: [true, 'Address is required']
    },
    phoneNumber: {
      type: String,
      required: [true, 'Phone number is required']
    },
    city: {
      type: String,
      required: [true, 'City is required']
    }
  },
  { timestamps: true }
)

const Shelter = mongoose.model('Shelter', ShelterSchema)

export default Shelter
