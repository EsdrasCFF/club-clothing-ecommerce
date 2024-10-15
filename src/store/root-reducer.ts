import { combineReducers } from '@reduxjs/toolkit'

import { categoryReducer } from './reducers/category/category.reducer'
import { userReducer } from './reducers/user/user.reducer'
import cartReducer from './toolkit/cart/cart-slice'

export const rootReducer = combineReducers({
  userReducer,
  cartReducer,
  categoryReducer,
})

export type RootState = ReturnType<typeof rootReducer>
