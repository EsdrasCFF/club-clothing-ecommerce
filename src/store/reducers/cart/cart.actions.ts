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

interface RemoveProductFromCart {
  type: typeof CartActionsTypes.REMOVE_PRODUCT_FROM_CART
  payload: string
}

interface AddProductToCart {
  type: typeof CartActionsTypes.ADD_PRODUCT_TO_CART
  payload: Product
}

interface IncreaseProductQuantity {
  type: typeof CartActionsTypes.INCREASE_PROCUCT_QUANTITY
  payload: string
}

interface DecreaseProductQuantity {
  type: typeof CartActionsTypes.DECREASE_PROCUCT_QUANTITY
  payload: string
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

export const removeProductFromCart = (payload: string): RemoveProductFromCart => ({
  type: CartActionsTypes.REMOVE_PRODUCT_FROM_CART,
  payload,
})

export const increaseProductQuantity = (payload: string): IncreaseProductQuantity => ({
  type: CartActionsTypes.INCREASE_PROCUCT_QUANTITY,
  payload,
})

export const decreaseProductQuantity = (payload: string): DecreaseProductQuantity => ({
  type: CartActionsTypes.DECREASE_PROCUCT_QUANTITY,
  payload,
})

export type CartActions =
  | OnOpenCartAction
  | OnCloseCartAction
  | AddProductToCart
  | RemoveProductFromCart
  | IncreaseProductQuantity
  | DecreaseProductQuantity
