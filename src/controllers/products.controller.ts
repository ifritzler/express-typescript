import { Product } from '@prisma/client'
import { Request } from 'express'
import ControllerProvider from '../interfaces/ControllerProvider'
import ProductService from '../services/products.service'

class ProductController extends ControllerProvider<Product> {
  constructor() {
    super(new ProductService())
  }
  async all(_req: Request) {
    const products = await this.service.all()
    return products
  }
  async findById(req: Request) {
    const { id } = req.params
    const product = await this.service.findById(parseInt(id))
    return product
  }
  async create(req: Request) {
    const data = req.body
    const newProduct = await this.service.create(data)
    return newProduct
  }
  async update(req: Request) {
    const { id } = req.params
    const changes = req.body
    const product = await this.service.update(parseInt(id), changes)
    return product
  }
  async delete(req: Request) {
    const { id } = req.params
    await this.service.delete(parseInt(id))
  }
}

export default ProductController
