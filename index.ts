import dotenv from 'dotenv'
import express, { Express, Request, Response } from 'express'

dotenv.config()

const PORT = process.env.PORT || 3001
const app: Express = express()

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Hello world' })
})

app.listen(PORT, () => {
  console.log(`⚡ Server running on port ${PORT}`)
})
