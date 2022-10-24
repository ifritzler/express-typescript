import express, { Request, Response, Router } from 'express'
import ProductController from '../controllers/products.controller'

const productsController = new ProductController()

const router: Router = express.Router()
router.get('/', async (req: Request, res: Response) => {
  const products = await productsController.all(req)
  res.status(200).json(products)
})
router.get('/:id', async (req: Request, res: Response) => {
  const product = await productsController.findById(req)
  res.status(200).json({ data: product })
})
router.post('/', async (req: Request, res: Response) => {
  const newProduct = await productsController.create(req)
  res.status(201).json({ data: newProduct })
})
router.put('/:id', async (req: Request, res: Response) => {
  const updatedProduct = await productsController.update(req)
  res.status(200).json({ data: updatedProduct })
})
router.delete('/:id', async (req: Request, res: Response) => {
  await productsController.delete(req)
  res.status(204).send()
})

export default router
