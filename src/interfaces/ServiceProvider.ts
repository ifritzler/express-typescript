import { Prisma, PrismaClient } from '@prisma/client'
import db from '../configs/prisma'
import IService from './IService'

class ServiceProvider<Type> implements IService {
  protected _db: PrismaClient<
    Prisma.PrismaClientOptions,
    never,
    Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined
  >
  constructor() {
    this._db = db
  }
  all(): Promise<Type[]> {
    throw new Error('Method not implemented.')
  }
  findById(_id: string | number): Promise<Type> {
    throw new Error('Method not implemented.')
  }
  create(_data: any): Promise<Type> {
    throw new Error('Method not implemented.')
  }
  update(_id: string | number, _changes: any): Promise<Type> {
    throw new Error('Method not implemented.')
  }
  delete(_id: string | number): Promise<void> {
    throw new Error('Method not implemented.')
  }

  get db() {
    throw new Error(
      `The current property db of class ${typeof this
        ._db} is not accesible outside a ServiceProvider class`
    )
  }
}
export default ServiceProvider
