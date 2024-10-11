import { MinusCircle, PlusCircle, XIcon } from 'lucide-react'
import { useContext } from 'react'

import { CartContext, CartProductProps } from '@/contexts/cart-context'
import { currencyFormat } from '@/lib/utils'

interface CartItemProps {
  product: CartProductProps
}

export function CartItem({ product }: CartItemProps) {
  const { removeProductFromCart, increaseProductQuantity, decreaseProductQuantity } = useContext(CartContext)

  function handleDeleteProductFromCart(productId: string) {
    removeProductFromCart(productId)
  }

  function handleIncreaseProductQuantity(productId: string) {
    increaseProductQuantity(productId)
  }

  function handleDecreaseProductQuantity(productId: string) {
    decreaseProductQuantity(productId)
  }

  return (
    <div className="flex h-44 w-full items-center justify-between">
      <div className="flex h-44 w-full items-center gap-2">
        {/* IMAGE */}
        <div className="h-44 w-36 overflow-hidden rounded-md">
          <img
            src={product.imageUrl}
            alt={`Image do produto ${product.name}`}
            className="h-full w-full object-cover shadow-md shadow-black3"
          />
        </div>
        {/* DETAILS */}
        <div className="flex flex-col items-start gap-2 text-black3">
          <p className="text-sm font-semibold">{product.name}</p>
          <span className="font-medium">{currencyFormat(product.price)}</span>
          <div className="flex items-center justify-center gap-3">
            <button disabled={product.quantity === 1} className="group disabled:bg-none">
              <MinusCircle
                size={20}
                className="rounded-full transition-all hover:bg-black3/20 group-disabled:text-gray-300 group-disabled:hover:bg-none"
                onClick={() => handleDecreaseProductQuantity(product.id)}
              />
            </button>

            <span className="leading-none">{product.quantity.toString().padStart(2, '0')}</span>

            <button className="group">
              <PlusCircle
                size={20}
                className="rounded-full transition-all hover:bg-black3/20"
                onClick={() => handleIncreaseProductQuantity(product.id)}
              />
            </button>
          </div>
        </div>
      </div>

      <div
        className="rounded-md p-[2px] transition-all hover:cursor-pointer hover:bg-black3/20"
        onClick={() => handleDeleteProductFromCart(product.id)}
      >
        <XIcon size={20} />
      </div>
    </div>
  )
}
