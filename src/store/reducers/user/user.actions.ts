import { UserActionsTypes } from './user.actions-types'
import { User } from './user.reducer'

export const loginUser = (payload: User) => ({
  type: UserActionsTypes.LOGIN,
  payload,
})

export const logoutUser = () => ({ type: UserActionsTypes.LOGOUT })
