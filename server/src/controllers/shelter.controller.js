import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { secret } from '../middlewares/jwt.middleware.js'
import ShelterModel from '../models/shelter.model.js'

const register = async (req, res) => {
  const shelter = new ShelterModel(req.body)
  try {
    await shelter.save()
    res.status(200).json({ message: 'success!', shelter })
  } catch (error) {
    res.status(400).json({ message: 'Something went wrong', error: error.message })
  }
}

const logout = async (req, res) => {
  try {
    res.clearCookie('sheltertoken') // clear the cookie from the response
    res.status(200).json({ message: 'You have successfully logged out' })
  } catch (error) {
    res.status(400).json({ message: 'Something went wrong', error: error.message })
  }
}

const login = async (req, res) => {
  const { email, password } = req.body
  try {
    const shelter = await ShelterModel.findOne({ email: email })
    if (shelter === null) {
      res.status(400).json({ message: 'invalid login attempt' })
    }
    if (req.body.password === undefined) {
      res.status(400).json({ message: 'invalid login attempt' })
    }
    const passwordValidation = await bcrypt.compare(password, shelter.password)
    if (passwordValidation) {
      const shelterInfo = {
        _id: shelter._id,
        shelterName: shelter.shelterName,
        address: shelter.address,
        email: shelter.email
      }
      console.log('shelterInfo: ', shelterInfo)

      const newJWT = jwt.sign(shelterInfo, secret)
      console.log('newJWT: ', newJWT)

      res
        .status(200)
        .cookie('sheltertoken', newJWT, {
          httpOnly: true,
          expires: new Date(Date.now() + 900000000),
          sameSite: 'none',
          secure: true
        })
        .json({ message: 'success!', shelter: shelterInfo, newJWT })
    } else {
      res.status(401).json({ message: 'invalid login attempt' })
    }
  } catch (error) {
    res.status(401).json({ message: 'Something went wrong', error: error.message })
  }
}

export default {
  register,
  logout,
  login
}
