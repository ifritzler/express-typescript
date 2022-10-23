import { Prisma, PrismaClient } from '@prisma/client'

interface IService {
  db:
    | PrismaClient<
        Prisma.PrismaClientOptions,
        never,
        Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined
      >
    | any

  all(): any
  findById(id: string | number): any
  create(data: {}): any
  update(id: number, changes: {}): void
  delete(id: number): void
}

export default IService
