import { Loader2, ShoppingBag } from 'lucide-react'
import { useState } from 'react'

import { CartItem } from '@/components/cart-item'
import { Title } from '@/components/title'
import { Button } from '@/components/ui/button'
import { useAppSelector } from '@/hooks/redux.hooks'

export default function CheckoutPage() {
  const [isLoading, setIsLoading] = useState(false)
  const { products } = useAppSelector((rootSelector) => rootSelector.cartReducer)
  async function handlePurchaseClick() {
    setIsLoading(true)
    try {
      const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/create-checkout-session`, {
        body: JSON.stringify({ products }),
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const data = await response.json()

      window.location.href = data.url
    } catch (err) {
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

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
        <div className="relative my-5 w-full max-w-[40rem]">
          <Button className="w-full" disabled={isLoading} onClick={handlePurchaseClick}>
            <ShoppingBag /> <p className="ml-3">Finalizar Compra</p>{' '}
            {isLoading && <Loader2 className="ml-2 animate-spin" />}
          </Button>
        </div>
      )}
    </main>
  )
}
