export type SliceResponceError = {
  code: number
  message: string
}

export type ApiData = {
  limit: number
  products: Array<Product>
  skip: number
  total: number
}

export interface SliceResponce<T> {
  data: T,
  error: SliceResponceError | null,
  loading: boolean
}

export type Product = {
  id: number,
  title: string,
  description: string,
  price: number,
  discountPercentage: number,
  rating: number,
  stock: number,
  brand: string,
  category: string,
  thumbnail: string,
  images: Array<string>
}
