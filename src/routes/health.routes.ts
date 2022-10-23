import express, { Request, Response, Router } from 'express'

const router: Router = express.Router()

router.get('/health', (_req: Request, res: Response) => {
  res.status(200).send()
})

export default router
