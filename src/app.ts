import cors from 'cors'
import dotenv from 'dotenv'
import express, { Express } from 'express'
import { pinoLogger } from './configs/pino'
import healthRouter from './routes/health.routes'
import v1Router from './routes/routes.index'

dotenv.config()

const app: Express = express()
// Middlewares
app.use(express.json())
app.use(cors())
app.use(express.static(process.cwd() + '/public'))
// Logger, we can use in our request 'req.log' to log all messages that we want
app.use(pinoLogger)

// Routers
app.use(healthRouter)
app.use('/api/v1', v1Router)

export default app
