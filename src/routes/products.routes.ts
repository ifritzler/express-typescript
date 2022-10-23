import express, { Request, Response, Router } from 'express'
import ProductController from '../controllers/products.controller'

const productsController = new ProductController()

const router: Router = express.Router()
router.get('/', (_req: Request, res: Response) => {
  const products = productsController.all()
  res.json(products)
})
router.get('/', () => {})
router.post('/', () => {})
router.put('/', () => {})
router.delete('/', () => {})

export default router
