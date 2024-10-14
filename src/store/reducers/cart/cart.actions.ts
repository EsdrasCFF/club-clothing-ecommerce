import { Product } from '@/components/categories-area'

import { CartActionsTypes } from './cart.actions-types'

interface OnOpenCartAction {
  type: typeof CartActionsTypes.ON_OPEN_CART
}

interface OnCloseCartAction {
  type: typeof CartActionsTypes.ON_CLOSE_CART
}

interface OnCloseCartAction {
  type: typeof CartActionsTypes.ON_CLOSE_CART
}

interface AddProductToCart {
  type: typeof CartActionsTypes.ADD_PRODUCT_TO_CART
  payload: Product
}

export const onOpenCart = (): OnOpenCartAction => ({
  type: CartActionsTypes.ON_OPEN_CART,
})

export const onCloseCart = (): OnCloseCartAction => ({
  type: CartActionsTypes.ON_CLOSE_CART,
})

export const addProductToCart = (payload: Product): AddProductToCart => ({
  type: CartActionsTypes.ADD_PRODUCT_TO_CART,
  payload,
})

export type CartActions = OnOpenCartAction | OnCloseCartAction | AddProductToCart
