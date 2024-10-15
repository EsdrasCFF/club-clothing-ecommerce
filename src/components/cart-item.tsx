import { MinusCircle, PlusCircle, XIcon } from 'lucide-react'
import { useDispatch } from 'react-redux'

import { currencyFormat } from '@/lib/utils'
import { AppDispatch } from '@/store/store'
import {
  CartProductProps,
  decreaseProductQuantity,
  increaseProductQuantity,
  removeProductFromCart,
} from '@/store/toolkit/cart/cart-slice'

interface CartItemProps {
  product: CartProductProps
}

export function CartItem({ product }: CartItemProps) {
  const dispatch: AppDispatch = useDispatch()

  function handleDeleteProductFromCart(productId: string) {
    dispatch(removeProductFromCart(productId))
  }

  function handleIncreaseProductQuantity(productId: string) {
    dispatch(increaseProductQuantity(productId))
  }

  function handleDecreaseProductQuantity(productId: string) {
    dispatch(decreaseProductQuantity(productId))
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
            <button>
              <MinusCircle
                size={20}
                className="rounded-full transition-all group-disabled:text-gray-300 hover:bg-black3/20 group-disabled:hover:bg-none"
                onClick={() => handleDecreaseProductQuantity(product.id)}
              />
            </button>

            <span className="leading-none">{product.quantity.toString().padStart(2, '0')}</span>

            <button>
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
