import { createContext, ReactNode, useState } from 'react'

import { Product } from '@/components/categories-area'

export interface CartProductProps extends Product {
  quantity: number
}

interface ICartContext {
  isOpen: boolean
  products: CartProductProps[]
  onOpenCart: () => void
  onCloseCart: () => void
  addProductToCart: (product: Product) => void
}

export const CartContext = createContext<ICartContext>({
  isOpen: false,
  products: [],
  onOpenCart() {},
  onCloseCart() {},
  addProductToCart() {},
})

export function CartContextProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [products, setProducts] = useState<CartProductProps[]>([])

  function onOpenCart() {
    setIsOpen(true)
  }

  function onCloseCart() {
    setIsOpen(false)
  }

  function addProductToCart(product: Product) {
    const productIsInTheCart = products.some((cartProduct) => product.id === cartProduct.id)

    if (!productIsInTheCart) {
      setProducts((prevState) => [...prevState, { ...product, quantity: 1 }])
      return
    }

    const newCart = products.map((cartProduct) => {
      if (cartProduct.id === product.id) {
        return {
          ...cartProduct,
          quantity: cartProduct.quantity + 1,
        }
      }

      return cartProduct
    })

    setProducts(newCart)
  }

  return (
    <CartContext.Provider
      value={{
        isOpen,
        products,
        onCloseCart,
        onOpenCart,
        addProductToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
