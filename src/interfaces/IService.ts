import { Prisma, PrismaClient } from '@prisma/client'

interface IService {
  db:
    | PrismaClient<
        Prisma.PrismaClientOptions,
        never,
        Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined
      >
    | any

  all(): Promise<any[]>
  findById(id: string | number): Promise<any>
  create(data: any): Promise<any>
  update(id: string | number, changes: any): Promise<any>
  delete(id: string | number): Promise<void>
}

export default IService
