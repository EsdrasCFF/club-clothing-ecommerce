import { createContext, ReactNode, useState } from 'react'

import { Product } from '@/components/categories-area'

interface CartProductProps extends Product {
  quantity: number
}

interface ICartContext {
  isOpen: boolean
  products: CartProductProps[]
  onOpenCart: () => void
  onCloseCart: () => void
}

export const CartContext = createContext<ICartContext>({
  isOpen: false,
  products: [],
  onOpenCart() {},
  onCloseCart() {},
})

export function CartContextProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [products] = useState<CartProductProps[]>([])

  function onOpenCart() {
    setIsOpen(true)
  }

  function onCloseCart() {
    setIsOpen(false)
  }

  return (
    <CartContext.Provider
      value={{
        isOpen,
        products,
        onCloseCart,
        onOpenCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
