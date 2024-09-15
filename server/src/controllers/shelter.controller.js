import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { secret } from '../config/jwt.config.js'
import ShelterModel from '../models/shelter.model.js'

const register = (req, res) => {
  const shelter = new ShelterModel(req.body)
  shelter
    .save()
    .then(() => {
      res.status(200).json({ msg: 'success!', shelter })
    })
    .catch((err) => res.status(400).json(err))
}

const logout = (req, res) => {
  res.clearCookie('sheltertoken') // clear the cookie from the response
  res.status(200).json({
    message: 'You have successfully logged out'
  })
}

const login = (req, res) => {
  ShelterModel.findOne({ email: req.body.email })
    .then((shelter) => {
      if (shelter === null) {
        res.status(400).json({ msg: 'invalid login attempt' })
      } else {
        if (req.body.password === undefined) {
          res.status(400).json({ msg: 'invalid login attempt' })
        }
        console.log(req.body)
        bcrypt
          .compare(req.body.password, shelter.password)
          .then((passwordIsValid) => {
            console.log('passwordIsValid: ', passwordIsValid)
            if (passwordIsValid) {
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
                .json({ msg: 'success!', shelter: shelterInfo, newJWT })
            } else {
              res.status(401).json({ msg: 'invalid login attempt' })
            }
          })
          .catch((err) => res.status(401).json({ msg: 'invalid login attempt', error: err }))
      }
    })
    .catch((err) => res.status(401).json({ error: err }))
}

export default {
  register,
  logout,
  login
}
