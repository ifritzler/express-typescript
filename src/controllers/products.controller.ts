import ControllerProvider from '../interfaces/ControllerProvider'
import ProductService from '../services/products.service'

class ProductController extends ControllerProvider {
  constructor() {
    super(new ProductService())
  }

  public all(): [] {
    throw new Error('Method not implemented.')
  }
  public findById(_id: number) {
    throw new Error('Method not implemented.')
  }
  public create() {
    throw new Error('Method not implemented.')
  }
  public update(_id: number): void {
    throw new Error('Method not implemented.')
  }
  public delete(_id: number): void {
    throw new Error('Method not implemented.')
  }
}

export default ProductController
