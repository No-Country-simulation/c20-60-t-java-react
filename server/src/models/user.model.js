import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'
import bcrypt from 'bcrypt'

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, 'First name is required']
    },
    lastName: {
      type: String,
      required: [true, 'Last name is required']
    },
    typeUser: {
      type: String,
      required: [true, 'Type is required']
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
    }
  },
  { timestamps: true }
)

UserSchema.virtual('confirmPassword')
  .get(function () {
    return this._confirmPassword
  })
  .set(function (value) {
    this._confirmPassword = value
  })

UserSchema.pre('validate', function (next) {
  console.log(this)
  if (this.password !== this.confirmPassword) {
    this.invalidate('confirmPassword', 'Password must match confirm password')
  }
  next()
})

UserSchema.pre('save', function (next) {
  bcrypt.hash(this.password, 10).then((hash) => {
    this.password = hash
    next()
  })
})

UserSchema.plugin(uniqueValidator, { message: 'Email already in use' })

const UserModel = mongoose.model('User', UserSchema)

export default UserModel
