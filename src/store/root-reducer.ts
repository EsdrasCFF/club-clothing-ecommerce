import { combineReducers } from '@reduxjs/toolkit'

import { cartReducer } from './reducers/cart/cart.reducer'
import { userReducer } from './reducers/user/user.reducer'

export const rootReducer = combineReducers({
  userReducer,
  cartReducer,
})

export type RootState = ReturnType<typeof rootReducer>
