import { useContext } from 'react'

import { CartContext } from '@/contexts/cart-context'

import { Sheet, SheetContent, SheetHeader, SheetTitle } from './ui/sheet'

export function Cart() {
  const { isOpen, onCloseCart } = useContext(CartContext)

  return (
    <Sheet open={isOpen} onOpenChange={onCloseCart}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-black3">Seu Carrinho</SheetTitle>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}
