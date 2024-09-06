import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import UserModel from '../models/user.model.js'

const secret = 'mysecret'

const register = (req, res) => {
  const user = new UserModel(req.body)
  user
    .save()
    .then(() => {
      res.status(200).json({ msg: 'success!', user })
    })
    .catch((err) => res.status(400).json(err))
}

const logout = (req, res) => {
  // clear the cookie from the response
  res.clearCookie('usertoken')
  res.status(200).json({
    message: 'You have successfully logged out'
  })
}

const login = (req, res) => {
  UserModel.findOne({ email: req.body.email })
    .then((user) => {
      if (user === null) {
        res.status(400).json({ msg: 'invalid login attempt' })
      } else {
        if (req.body.password === undefined) {
          res.status(400).json({ msg: 'invalid login attempt' })
        }
        console.log(req.body)
        bcrypt
          .compare(req.body.password, user.password)
          .then((passwordIsValid) => {
            console.log('passwordIsValid: ', passwordIsValid)
            if (passwordIsValid) {
              const userInfo = {
                _id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email
              }
              console.log('userInfo: ', userInfo)

              const newJWT = jwt.sign(userInfo, secret)
              console.log('newJWT: ', newJWT)
              res
                .status(200)
                .cookie('usertoken', newJWT, {
                  httpOnly: true,
                  expires: new Date(Date.now() + 900000000)
                })
                .json({ msg: 'success!', user: userInfo, newJWT })
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
