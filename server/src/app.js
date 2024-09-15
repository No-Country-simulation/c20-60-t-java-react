import cookieParser from 'cookie-parser'
import cors from 'cors'
import express from 'express'
import './config/mongoose.config.js' // This will fire our mongoose.connect statement to initialize our database connection
import AllMyPetRoutes from './routes/pet.routes.js'
import SwaggerRoutes from './routes/swagger.routes.js'
import AllMyShelterRoutes from './routes/shelter.routes.js'

const app = express()

app.use(express.json(), express.urlencoded({ extended: true }))

const corsOptions = {
  origin: process.env.ORIGIN_CLIENT,
  credentials: true, // Allow credentials (cookies) to be sent to/from origin
  methods: 'GET, POST, PUT, PATCH, DELETE' // Allow these methods
}

app.use(cors(corsOptions))
app.use(cookieParser())

AllMyPetRoutes(app)
AllMyShelterRoutes(app)
SwaggerRoutes(app)

export default app
