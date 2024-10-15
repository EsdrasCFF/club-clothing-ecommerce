import { ShoppingBag } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { toast } from 'sonner'

import { currencyFormat } from '@/lib/utils'
import { AppDispatch } from '@/store/store'
import { addProductToCart } from '@/store/toolkit/cart/cart-slice'

import { Product } from './categories-area'
import { CustomButton } from './custom-button'

interface CategoryProductPros {
  product: Product
}

export function ProductItem({ product }: CategoryProductPros) {
  const dispatch: AppDispatch = useDispatch()

  function handleAddProductToCart(product: Product) {
    dispatch(addProductToCart(product))
    toast.success(`${product.name} foi adicionado ao carrinho!`)
  }

  return (
    <div className="h-full w-full">
      <div className="group relative h-full max-h-96 w-full max-w-[18.75rem] overflow-hidden rounded-md shadow-lg shadow-gray2">
        <img src={product.imageUrl} alt={`image do producto ${product.name}`} className="h-full w-full object-cover" />
        <div className="absolute bottom-0 flex h-full w-full items-end bg-black3/25 px-5 pb-5 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
          <CustomButton
            icon={ShoppingBag}
            title="Adicionar ao carrinho"
            className="text-sm"
            onClick={() => handleAddProductToCart(product)}
          />
        </div>
      </div>
      <div className="mt-2 flex items-center justify-between text-sm font-medium leading-none">
        <span className="capitalize">{product.name}</span>
        <span>{currencyFormat(product.price)}</span>
      </div>
    </div>
  )
}
