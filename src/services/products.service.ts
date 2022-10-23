import { Product } from '@prisma/client'
import { ProductCreateDTO, ProductUpdateDTO } from '../dto/products.dto'
import ServiceProvider from '../interfaces/ServiceProvider'

class ProductService extends ServiceProvider {
  async all(): Promise<Product[]> {
    const products = await this._db.product.findMany()
    return products
  }

  async findById(id: number): Promise<Product> {
    const product = await this._db.product.findUnique({ where: { id } })
    if (!product) throw new Error('Product not found')

    return product
  }

  async create(data: ProductCreateDTO): Promise<Product> {
    const newProduct = this._db.product.create({ data })
    return newProduct
  }

  async update(id: number, changes: ProductUpdateDTO): Promise<Product> {
    const updated = await this._db.product.update({
      where: { id },
      data: changes,
    })
    return updated
  }

  async delete(id: number): Promise<void> {
    await this._db.product.delete({ where: { id } })
  }
}

export default ProductService
