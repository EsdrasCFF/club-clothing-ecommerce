import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { CartContextProvider } from '@/contexts/cart-context'
import { CategoryContextProvider } from '@/contexts/category-context'
import { persistor, store } from '@/store/store'

export function ContextsProvider({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <CategoryContextProvider>
          <CartContextProvider>{children}</CartContextProvider>
        </CategoryContextProvider>
      </PersistGate>
    </Provider>
  )
}
