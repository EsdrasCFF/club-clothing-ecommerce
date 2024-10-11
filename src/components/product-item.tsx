import { ShoppingBag } from 'lucide-react'

import { currencyFormat } from '@/lib/utils'

import { CustomButton } from './custom-button'

interface CategoryProductPros {
  imageUrl: string
  name: string
  price: number
}

export function ProductItem({ imageUrl, name, price }: CategoryProductPros) {
  return (
    <div className="h-full w-full">
      <div className="group relative h-full max-h-96 w-full max-w-[18.75rem] overflow-hidden rounded-md shadow-lg shadow-gray2">
        <img src={imageUrl} alt={`image do producto ${name}`} className="h-full w-full object-cover" />
        <div className="absolute bottom-0 flex h-full w-full items-end bg-black3/25 px-5 pb-5 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
          <CustomButton icon={ShoppingBag} title="Adicionar ao carrinho" className="text-sm" />
        </div>
      </div>
      <div className="mt-2 flex items-center justify-between text-sm font-medium leading-none">
        <span className="capitalize">{name}</span>
        <span>{currencyFormat(price)}</span>
      </div>
    </div>
  )
}
