import mongoose from 'mongoose'

const RequestSchema = new mongoose.Schema(
  {
    name: {
      type: String
    },
    email: {
      type: String,
      required: [true, 'email is required']
    },
    phone_number: {
      type: Number,
      required: [true, 'phone is required']
    },
    location: {
      type: String,
      required: [true, 'Location is required']
    },
    message: {
      type: String,
      required: [true, 'Message is required']
    },
    pet: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Pet'
    }
  },
  { timestamps: true }
)

const Request = mongoose.model('Request', RequestSchema)

export default Request
