import jwt from 'jsonwebtoken'
const secret = 'mysecret'
export { secret }

export function authenticate(req, res, next) {
  const token = req.cookies.sheltertoken || req.headers.authorization?.split(' ')[1] // Obtener el token de la cookie o el encabezado Authorization
  if (!token) {
    return res.status(403).json({ message: 'No token provided' })
  }
  // Verify the JWT
  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      console.log(req.cookies.sheltertoken)
      res.status(401).json({ verified: false, msg: 'El token no es válido!' })
    } else {
      // Attach decoded shelter information to the request object
      req.shelterId = decoded._id
      next()
    }
  })
}
