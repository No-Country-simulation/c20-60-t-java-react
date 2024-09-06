import jwt from 'jsonwebtoken'
const secret = 'mysecret'
export { secret }

export const authenticate = (req, res, next) => {
  jwt.verify(req.cookies.usertoken, secret, (err, payload) => {
    if (err) {
      console.log(req.cookies.usertoken)
      res.status(401).json({ verified: false, msg: 'El token no es válido!' })
    } else {
      next()
    }
  })
}
