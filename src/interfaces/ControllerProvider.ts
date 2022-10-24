import { Request } from 'express'
import IController from './IController'
import ServiceProvider from './ServiceProvider'

class ControllerProvider<Type> implements IController {
  service: ServiceProvider<Type>

  constructor(service: ServiceProvider<Type>) {
    this.service = service
  }
  all(_req: Request): Promise<Type[]> {
    throw new Error('Method not implemented.')
  }
  findById(_req: Request): Promise<Type> {
    throw new Error('Method not implemented.')
  }
  create(_req: Request): Promise<Type> {
    throw new Error('Method not implemented.')
  }
  update(_req: Request): Promise<Type> {
    throw new Error('Method not implemented.')
  }
  delete(_req: Request): Promise<void> {
    throw new Error('Method not implemented.')
  }
}

export default ControllerProvider
