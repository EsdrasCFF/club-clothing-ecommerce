import { createContext, ReactNode, useMemo, useState } from 'react'

import { Product } from '@/components/categories-area'

export interface CartProductProps extends Product {
  quantity: number
}

interface ICartContext {
  isOpen: boolean
  products: CartProductProps[]
  totalCart: number
  onOpenCart: () => void
  onCloseCart: () => void
  addProductToCart: (product: Product) => void
  removeProductFromCart: (productId: string) => void
  increaseProductQuantity: (productId: string) => void
  decreaseProductQuantity: (productId: string) => void
}

export const CartContext = createContext<ICartContext>({
  isOpen: false,
  products: [],
  totalCart: 0,
  onOpenCart() {},
  onCloseCart() {},
  addProductToCart() {},
  removeProductFromCart() {},
  increaseProductQuantity() {},
  decreaseProductQuantity() {},
})

export function CartContextProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [products, setProducts] = useState<CartProductProps[]>([])

  const totalCart = useMemo(() => {
    const amount = products.reduce((acc, cur) => {
      const total = acc + cur.price * cur.quantity

      return total
    }, 0)

    return amount
  }, [products])

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

  function removeProductFromCart(productId: string) {
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== productId))
  }

  function increaseProductQuantity(productId: string) {
    setProducts((prevProducts) =>
      prevProducts.map((product) => {
        if (product.id == productId) {
          return {
            ...product,
            quantity: product.quantity + 1,
          }
        }

        return product
      })
    )
  }

  function decreaseProductQuantity(productId: string) {
    setProducts((prevProducts) =>
      prevProducts.map((product) => {
        if (product.id == productId) {
          return {
            ...product,
            quantity: product.quantity - 1,
          }
        }

        return product
      })
    )
  }

  return (
    <CartContext.Provider
      value={{
        isOpen,
        products,
        totalCart,
        onCloseCart,
        onOpenCart,
        addProductToCart,
        removeProductFromCart,
        increaseProductQuantity,
        decreaseProductQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
