import express from 'express'
import { swaggerUi, specs } from '../swagger.js'
import petRoutes from '../routes/pet.routes.js'

const app = express()
const port = 3000

app.use(express.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))
app.use('/', petRoutes)

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
