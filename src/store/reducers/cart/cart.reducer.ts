import { Product } from '@/components/categories-area'

import { CartActions } from './cart.actions'
import { CartActionsTypes } from './cart.actions-types'

export interface CartProductProps extends Product {
  quantity: number
}

interface InitialState {
  isOpen: boolean
  products: CartProductProps[]
}

const initialState: InitialState = {
  isOpen: false,
  products: [],
}

export const cartReducer = (state = initialState, action: CartActions) => {
  switch (action.type) {
    case CartActionsTypes.ON_OPEN_CART:
      return { ...state, isOpen: true }

    case CartActionsTypes.ON_CLOSE_CART:
      return { ...state, isOpen: false }

    case CartActionsTypes.ADD_PRODUCT_TO_CART: {
      const product = action.payload

      const productIsInTheCart = state.products.some((cartProduct) => product.id === cartProduct.id)

      if (!productIsInTheCart) {
        return {
          ...state,
          products: [...state.products, { ...product, quantity: 1 }],
        }
      }

      const newCart = state.products.map((cartProduct) => {
        if (cartProduct.id === product.id) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + 1,
          }
        }

        return cartProduct
      })

      return { ...state, products: newCart }
    }

    case CartActionsTypes.REMOVE_PRODUCT_FROM_CART: {
      const productId = action.payload

      return {
        ...state,
        products: state.products.filter((product) => product.id !== productId),
      }
    }

    default:
      return {
        ...state,
      }
  }
}
