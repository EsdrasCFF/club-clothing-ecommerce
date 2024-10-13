import { ReactNode } from 'react'
import { Provider } from 'react-redux'

import { CartContextProvider } from '@/contexts/cart-context'
import { CategoryContextProvider } from '@/contexts/category-context'
import { UserContextProvider } from '@/contexts/user-context'
import store from '@/store/store'

export function ContextsProvider({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <UserContextProvider>
        <CategoryContextProvider>
          <CartContextProvider>{children}</CartContextProvider>
        </CategoryContextProvider>
      </UserContextProvider>
    </Provider>
  )
}
