import jwt from 'jsonwebtoken'
const secret = 'mysecret'
export { secret }

export const authenticate = (req, res, next) => {
  jwt.verify(req.cookies.sheltertoken, secret, (err, payload) => {
    if (err) {
      console.log(req.cookies.sheltertoken)
      res.status(401).json({ verified: false, msg: 'El token no es válido!' })
    } else {
      next()
    }
  })
}
