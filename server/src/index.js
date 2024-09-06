import 'dotenv/config'
import http from 'http'
import app from './app.js'

const server = http.createServer(app)
const PORT = process.env.SERVER_PORT || 3001

server.listen(PORT, () => {
  console.log(`The server is all fired up on port ${PORT}`)
})
