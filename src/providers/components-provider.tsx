import { Toaster } from 'sonner'

import { Cart } from '@/components/cart'

export function ComponentsProvider() {
  return (
    <>
      <Toaster />
      <Cart />
    </>
  )
}
