const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const AllMyPetRoutes = require('./routes/pet.routes')
require('./config/mongoose.config') // This will fire our mongoose.connect statement to initialize our database connection

const app = express()

app.use(express.json(), express.urlencoded({ extended: true }))

const corsOptions = {
  credentials: true, // Allow credentials (cookies) to be sent to/from origin
  methods: 'GET, POST, PUT, PATCH, DELETE' // Allow these methods
}

app.use(cors(corsOptions))
app.use(cookieParser())

AllMyPetRoutes(app)

module.exports = app
