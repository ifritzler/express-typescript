import { NextFunction, Request, Response } from 'express'

const errorHandlerMiddleware = (
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  res.status(500).json({ error: error.message })
}

export default errorHandlerMiddleware
