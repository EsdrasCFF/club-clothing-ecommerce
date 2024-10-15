import { ShoppingBagIcon } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { useAppSelector } from '@/hooks/redux.hooks'
import { currencyFormat } from '@/lib/utils'
import { AppDispatch } from '@/store/store'
import { selectProductsTotalPrice } from '@/store/toolkit/cart/cart-selectors'
import { closeCart } from '@/store/toolkit/cart/cart-slice'

import { CartItem } from './cart-item'
import { CustomButton } from './custom-button'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from './ui/sheet'

export function Cart() {
  const { isOpen, products } = useAppSelector((rootReducer) => rootReducer.cartReducer)
  const dispatch: AppDispatch = useDispatch()

  const productsTotalPrice = useAppSelector(selectProductsTotalPrice)

  const navigate = useNavigate()

  function handleGoToCheckout() {
    navigate('/checkout')
    dispatch(closeCart())
  }

  function handleCartChange() {
    dispatch(closeCart())
  }

  return (
    <Sheet open={isOpen} onOpenChange={handleCartChange}>
      <SheetContent className="flex h-screen flex-col justify-between">
        <SheetHeader>
          <SheetTitle className="text-black3">Seu Carrinho</SheetTitle>
        </SheetHeader>

        <div className="my-3 flex flex-1 flex-col gap-3 overflow-y-auto border-t border-black3/20 py-2 [&::-webkit-scrollbar]:hidden">
          {products.length === 0 && <p className="mt-3 text-sm text-black3">Não há itens no carrinho! :/</p>}
          {products.map((product) => (
            <CartItem product={product} key={product.id} />
          ))}
        </div>
        <div className="flex flex-col border-t border-black3/20">
          <p className="py-3 text-base font-semibold">{`Total: ${currencyFormat(productsTotalPrice)}`}</p>
          <CustomButton
            icon={ShoppingBagIcon}
            title="Ir para o Pagamento"
            disabled={products.length === 0}
            onClick={handleGoToCheckout}
          />
        </div>
      </SheetContent>
    </Sheet>
  )
}
