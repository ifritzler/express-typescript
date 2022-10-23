import IController from './IController'
import ServiceProvider from './IService'

class ControllerProvider implements IController {
  service: ServiceProvider

  constructor(service: ServiceProvider) {
    this.service = service
  }

  all(): [] {
    throw new Error('Method not implemented.')
  }
  findById(_id: number) {
    throw new Error('Method not implemented.')
  }
  create() {
    throw new Error('Method not implemented.')
  }
  update(_id: number): void {
    throw new Error('Method not implemented.')
  }
  delete(_id: number): void {
    throw new Error('Method not implemented.')
  }
}

export default ControllerProvider
