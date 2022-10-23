import pino, { HttpLogger } from 'express-pino-logger'

export const pinoLogger: HttpLogger = pino({
  level: 'info',
  enabled: true,
})
