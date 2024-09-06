import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import './config/mongoose.config.js'
import AllMyPetRoutes from './routes/pet.routes.js'
import AllMyUserRoutes from './routes/user.routes.js'

const app = express()

// This will fire our mongoose.connect statement to initialize our database connection

app.use(express.json(), express.urlencoded({ extended: true }))
const corsOptions = {
  credentials: true, // Allow credentials (cookies) to be sent to/from origin
  origin: 'http://localhost:5173', // Allow only this origin
  methods: 'GET, POST, PUT, PATCH, DELETE' // Allow these methods
}
app.use(cors(corsOptions))
app.use(cookieParser())

AllMyPetRoutes(app)
AllMyUserRoutes(app)

app.listen(8000, () => console.log('The server is all fired up on port 8000'))
