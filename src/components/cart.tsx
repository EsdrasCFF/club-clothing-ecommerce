import { ShoppingBagIcon } from 'lucide-react'
import { useContext } from 'react'

import { CartContext } from '@/contexts/cart-context'

import { CartItem } from './cart-item'
import { CustomButton } from './custom-button'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from './ui/sheet'

export function Cart() {
  const { isOpen, onCloseCart, products } = useContext(CartContext)

  return (
    <Sheet open={isOpen} onOpenChange={onCloseCart}>
      <SheetContent className="flex h-screen flex-col justify-between">
        <SheetHeader>
          <SheetTitle className="text-black3">Seu Carrinho</SheetTitle>
        </SheetHeader>

        <div className="my-3 flex flex-1 flex-col gap-3 overflow-y-auto border-b border-t border-black3/20 py-2 [&::-webkit-scrollbar]:hidden">
          {products.length === 0 && <p className="mt-3 text-sm text-black3">Não há itens no carrinho! :/</p>}
          {products.map((product) => (
            <CartItem product={product} key={product.id} />
          ))}
        </div>

        <CustomButton icon={ShoppingBagIcon} title="Ir para o Pagamento" />
      </SheetContent>
    </Sheet>
  )
}
