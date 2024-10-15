import { combineReducers } from '@reduxjs/toolkit'

import cartReducer from './toolkit/cart/cart-slice'
import categoryReducer from './toolkit/category/category-slice'
import userReducer from './toolkit/user/user-slice'

export const rootReducer = combineReducers({
  userReducer,
  cartReducer,
  categoryReducer,
})

export type RootState = ReturnType<typeof rootReducer>
