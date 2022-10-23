import { Prisma, PrismaClient } from '@prisma/client'
import db from '../configs/prisma'
import IService from './IService'

class ServiceProvider implements IService {
  protected _db: PrismaClient<
    Prisma.PrismaClientOptions,
    never,
    Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined
  >
  constructor() {
    this._db = db
  }

  get db() {
    throw new Error(
      `The current property db of class ${typeof this
        ._db} is not accesible outside a ServiceProvider class`
    )
  }

  all() {
    throw new Error('Method not implemented.')
  }
  findById(_id: number) {
    throw new Error('Method not implemented.')
  }
  create(_data: {}) {
    throw new Error('Method not implemented.')
  }
  update(_id: number, _changes: {}): void {
    throw new Error('Method not implemented.')
  }
  delete(_id: number): void {
    throw new Error('Method not implemented.')
  }
}
export default ServiceProvider
