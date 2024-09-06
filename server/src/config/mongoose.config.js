import 'dotenv/config'
import { connect } from 'mongoose'

const uri = process.env.ATLAS_SERVER

connect(uri, {})
  .then(() => console.log('Established a connection to the database'))
  .catch((err) => console.log('Something went wrong when connecting to the database', err))
