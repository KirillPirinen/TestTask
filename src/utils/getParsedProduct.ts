import { Product } from "../redux/types";

export type ParsedProduct = {
  name: string
  y: number
  drilldown: string
  _category: string
}

export const getParsedProduct = (product: Product): ParsedProduct => {
  return {
    name: product.title,
    drilldown: product.title,
    y: product.rating,
    _category: product.category
  }
} 
