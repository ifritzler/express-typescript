import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT || 3001
const app = express()

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
