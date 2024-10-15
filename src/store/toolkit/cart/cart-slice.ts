import { createSlice,PayloadAction } from '@reduxjs/toolkit'

import { Product } from '@/components/categories-area'

export interface CartProductProps extends Product {
  quantity: number
}

interface InitalState {
  isOpen: boolean
  products: CartProductProps[]
}

const initialState: InitalState = {
  isOpen: false,
  products: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    openCart: (state) => {
      state.isOpen = true
    },
    closeCart: (state) => {
      state.isOpen = false
    },
    addProductToCart: (state, action: PayloadAction<Product>) => {
      const product = action.payload

      const existsProductInTheCart = state.products.some((cartProduct) => cartProduct.id === product.id)

      if (!existsProductInTheCart) {
        state.products = [...state.products, { ...product, quantity: 1 }]
        return
      }

      const newCart = state.products.map((cartProduct) =>
        cartProduct.id == product.id ? { ...cartProduct, quantity: cartProduct.quantity + 1 } : cartProduct
      )

      state.products = newCart
    },
    removeProductFromCart: (state, action: PayloadAction<string>) => {
      const productId = action.payload
      state.products = state.products.filter((cartProduct) => cartProduct.id !== productId)
    },
    increaseProductQuantity: (state, action: PayloadAction<string>) => {
      const productId = action.payload

      const newCart = state.products.map((cartProduct) => {
        if (cartProduct.id === productId) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + 1,
          }
        }

        return cartProduct
      })

      state.products = newCart
    },
    decreaseProductQuantity: (state, action: PayloadAction<string>) => {
      const productId = action.payload

      const newCart = state.products
        .map((cartProduct) => {
          if (cartProduct.id === productId) {
            return {
              ...cartProduct,
              quantity: cartProduct.quantity - 1,
            }
          }

          return cartProduct
        })
        .filter((cartProduct) => cartProduct.quantity > 0)

      state.products = newCart
    },
    clearProducts: (state) => {
      state.products = []
    },
  },
})

export const {
  addProductToCart,
  clearProducts,
  closeCart,
  decreaseProductQuantity,
  increaseProductQuantity,
  openCart,
  removeProductFromCart,
} = cartSlice.actions

export default cartSlice.reducer
