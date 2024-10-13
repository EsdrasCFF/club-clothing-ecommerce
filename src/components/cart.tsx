import { ShoppingBagIcon } from 'lucide-react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { CartContext } from '@/contexts/cart-context'
import { currencyFormat } from '@/lib/utils'

import { CartItem } from './cart-item'
import { CustomButton } from './custom-button'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from './ui/sheet'

export function Cart() {
  const { isOpen, onCloseCart, products, productsTotalValue } = useContext(CartContext)

  const navigate = useNavigate()

  function handleGoToCheckout() {
    navigate('/checkout')
    onCloseCart()
  }

  return (
    <Sheet open={isOpen} onOpenChange={onCloseCart}>
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
          <p className="py-3 text-base font-semibold">{`Total: ${currencyFormat(productsTotalValue)}`}</p>
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
