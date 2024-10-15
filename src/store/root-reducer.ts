import { combineReducers } from '@reduxjs/toolkit'

import { categoryReducer } from './reducers/category/category.reducer'
import cartReducer from './toolkit/cart/cart-slice'
import userReducer from './toolkit/user/user-slice'

export const rootReducer = combineReducers({
  userReducer,
  cartReducer,
  categoryReducer,
})

export type RootState = ReturnType<typeof rootReducer>
