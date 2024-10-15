import { RootState } from '@/store/store'

export function selectProductsTotalPrice(rootState: RootState) {
  const productsTotalPrice = rootState.cartReducer.products.reduce((acc, currentProduct) => {
    return acc + currentProduct.price * currentProduct.quantity
  }, 0)

  return productsTotalPrice
}

export function selectProductsTotalQuantity(rootState: RootState) {
  const productsTotalQuantity = rootState.cartReducer.products.reduce((acc, currentProduct) => {
    return acc + currentProduct.quantity
  }, 0)

  return productsTotalQuantity
}
