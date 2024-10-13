import { ShoppingBag } from 'lucide-react'
import { useContext } from 'react'

import { CartItem } from '@/components/cart-item'
import { CustomButton } from '@/components/custom-button'
import { Title } from '@/components/title'
import { CartContext } from '@/contexts/cart-context'

export default function CheckoutPage() {
  const { products } = useContext(CartContext)

  return (
    <main className="flex h-full w-full flex-col items-center px-5">
      <div className="mb-4 mt-7">
        <Title text="Checkout" />
      </div>

      <div
        className={`scrollbar-thumb-rounded-full scrollbar-track-rounded-full flex h-[calc(100vh_-_300px)] w-full max-w-[40rem] flex-grow scroll-m-1 flex-col gap-5 overflow-y-auto pr-4 scrollbar-thin scrollbar-track-slate-300 scrollbar-thumb-slate-900`}
      >
        {products.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}

        {products.length == 0 && <p className="mt-3 text-center text-sm text-black3">Seu carrinho está vazio!</p>}
      </div>

      {products.length > 0 && (
        <div className="my-5 w-full max-w-[40rem]">
          <CustomButton icon={ShoppingBag} title="Finalizar compra" />
        </div>
      )}
    </main>
  )
}
