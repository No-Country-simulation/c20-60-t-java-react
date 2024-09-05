const mongoose = require('mongoose')
require('dotenv').config()

const uri = process.env.ATLAS_SERVER

mongoose
  .connect(uri, {})
  .then(() => console.log('Established a connection to the database'))
  .catch((err) => console.log('Something went wrong when connecting to the database', err))
