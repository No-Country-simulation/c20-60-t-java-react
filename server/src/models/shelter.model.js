import bcrypt from 'bcrypt'
import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const ShelterSchema = new mongoose.Schema(
  {
    shelterName: {
      type: String,
      required: [true, 'Shelter name is required']
    },
    address: {
      type: String,
      required: [true, 'Address is required']
    },
    email: {
      type: String,
      unique: true,
      required: [true, 'Email is required'],
      validate: {
        validator: (val) => /^([\w-.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
        message: 'Please enter a valid email'
      }
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [8, 'Password must be 8 characters or longer']
    },
    pets: {
      type: [String],
      default: []
    }
  },
  { timestamps: true }
)

ShelterSchema.virtual('confirmPassword')
  .get(function () {
    return this._confirmPassword
  })
  .set(function (value) {
    this._confirmPassword = value
  })

ShelterSchema.pre('validate', function (next) {
  console.log(this)
  if (this.password !== this.confirmPassword) {
    this.invalidate('confirmPassword', 'Password must match confirm password')
  }
  next()
})

ShelterSchema.pre('save', function (next) {
  bcrypt.hash(this.password, 10).then((hash) => {
    this.password = hash
    next()
  })
})

ShelterSchema.plugin(uniqueValidator, { message: 'Email already in use' })

const ShelterModel = mongoose.model('Shelter', ShelterSchema)

export default ShelterModel
