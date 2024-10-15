import { combineReducers } from '@reduxjs/toolkit'

import { cartReducer } from './reducers/cart/cart.reducer'
import { categoryReducer } from './reducers/category/category.reducer'
import { userReducer } from './reducers/user/user.reducer'

export const rootReducer = combineReducers({
  userReducer,
  cartReducer,
  categoryReducer,
})

export type RootState = ReturnType<typeof rootReducer>
