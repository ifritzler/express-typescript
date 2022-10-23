class ProductCreateDTO {
  title!: string
  price!: number
  thumnail!: string
}

class ProductUpdateDTO extends ProductCreateDTO {}

export { ProductCreateDTO, ProductUpdateDTO }
