import express, { Router } from 'express'
import productsRouter from './products.routes'

const router: Router = express.Router()

// All routes resources
router.use('/products', productsRouter)

export default router
