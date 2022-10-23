import ServiceProvider from './IService'

interface IController {
  service: ServiceProvider

  all(): []
  findById(id: number): any
  create(): any
  update(id: number): void
  delete(id: number): void
}

export default IController
