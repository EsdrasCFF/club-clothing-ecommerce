import { createContext, ReactNode, useEffect, useMemo, useState } from 'react'

import { Product } from '@/components/categories-area'

export interface CartProductProps extends Product {
  quantity: number
}

interface ICartContext {
  isOpen: boolean
  products: CartProductProps[]
  productsTotalValue: number
  productsTotalQuantity: number
  onOpenCart: () => void
  onCloseCart: () => void
  addProductToCart: (product: Product) => void
  removeProductFromCart: (productId: string) => void
  increaseProductQuantity: (productId: string) => void
  decreaseProductQuantity: (productId: string) => void
  clearProducts: () => void
}

export const CartContext = createContext<ICartContext>({
  isOpen: false,
  products: [],
  productsTotalValue: 0,
  productsTotalQuantity: 0,
  onOpenCart() {},
  onCloseCart() {},
  addProductToCart() {},
  removeProductFromCart() {},
  increaseProductQuantity() {},
  decreaseProductQuantity() {},
  clearProducts() {},
})

export function CartContextProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const [products, setProducts] = useState<CartProductProps[]>(() => {
    const productsFromLocalStorage = localStorage.getItem('@club-clothing-store:1.0')
    if (!productsFromLocalStorage) {
      return []
    }
    const productFromLocalStorage = JSON.parse(productsFromLocalStorage)
    return productFromLocalStorage
  })

  const productsTotalValue = useMemo(() => {
    const amount = products.reduce((acc, cur) => {
      const total = acc + cur.price * cur.quantity

      return total
    }, 0)

    return amount
  }, [products])

  const productsTotalQuantity = useMemo(() => {
    const total = products.reduce((acumulator, currentProduct) => acumulator + currentProduct.quantity, 0)
    return total
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
      prevProducts
        .map((product) => {
          if (product.id == productId) {
            return {
              ...product,
              quantity: product.quantity - 1,
            }
          }

          return product
        })
        .filter((produts) => produts.quantity > 0)
    )
  }

  function clearProducts() {
    setProducts([])
    localStorage.setItem('@club-clothing-store:1.0', JSON.stringify([]))
  }

  useEffect(() => {
    const productsFromLocalStorage = JSON.parse(localStorage.getItem('@club-clothing-store:1.0')!)
    setProducts(productsFromLocalStorage)
  }, [])

  useEffect(() => {
    localStorage.setItem('@club-clothing-store:1.0', JSON.stringify(products))
  }, [products])

  return (
    <CartContext.Provider
      value={{
        isOpen,
        products,
        productsTotalValue,
        productsTotalQuantity,
        onCloseCart,
        onOpenCart,
        addProductToCart,
        removeProductFromCart,
        increaseProductQuantity,
        decreaseProductQuantity,
        clearProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
