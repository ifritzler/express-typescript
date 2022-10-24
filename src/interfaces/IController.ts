import { Request } from 'express'
import ServiceProvider from './IService'

interface IController {
  service: ServiceProvider

  all(req: Request): Promise<any[]>
  findById(req: Request): Promise<any>
  create(req: Request): Promise<any>
  update(req: Request): Promise<any>
  delete(req: Request): Promise<void>
}

export default IController
