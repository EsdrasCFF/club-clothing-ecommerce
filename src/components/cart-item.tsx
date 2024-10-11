import { MinusCircle, PlusCircle, XIcon } from 'lucide-react'

import { CartProductProps } from '@/contexts/cart-context'
import { currencyFormat } from '@/lib/utils'

interface CartItemProps {
  product: CartProductProps
}

export function CartItem({ product }: CartItemProps) {
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
            <MinusCircle size={20} className="rounded-full transition-all hover:cursor-pointer hover:bg-black3/20" />
            <span className="leading-none">{product.quantity.toString().padStart(2, '0')}</span>
            <PlusCircle size={20} className="rounded-full transition-all hover:cursor-pointer hover:bg-black3/20" />
          </div>
        </div>
      </div>

      <div className="rounded-md p-[2px] transition-all hover:cursor-pointer hover:bg-black3/20">
        <XIcon size={20} />{' '}
      </div>
    </div>
  )
}
