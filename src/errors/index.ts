class APIError extends Error {
  constructor(message: string) {
    super(message)
  }
}

class NotFound extends APIError {
  statusCode: number
  constructor(message: string) {
    super(message)
    this.statusCode = 404
  }
}

export class ProductNotFound extends NotFound {
  constructor() {
    super('Product not found')
  }
}

export class UserNotFound extends NotFound {
  constructor() {
    super('User not found')
  }
}
