import { ReactNode } from 'react'

import { CartContextProvider } from '@/contexts/cart-context'
import { CategoryContextProvider } from '@/contexts/category-context'
import { UserContextProvider } from '@/contexts/user-context'

export function ContextsProvider({ children }: { children: ReactNode }) {
  return (
    <UserContextProvider>
      <CategoryContextProvider>
        <CartContextProvider>{children}</CartContextProvider>
      </CategoryContextProvider>
    </UserContextProvider>
  )
}
