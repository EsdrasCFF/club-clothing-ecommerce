/* eslint-disable @typescript-eslint/no-explicit-any */

import { UserActionsTypes } from './user.actions-types'

export interface User {
  firstName: string
  lastName: string
  email: string
  provider: 'firebase' | 'google'
}

interface InitalState {
  currentUser: User | null
  isAuthenticated: boolean
  isLoading: boolean
}

const initialState: InitalState = {
  currentUser: null,
  isAuthenticated: false,
  isLoading: true,
}

export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case UserActionsTypes.LOGIN:
      return { ...state, currentUser: action.payload, isAuthenticated: true, isLoading: false }

    case UserActionsTypes.LOGOUT:
      return { ...state, currentUser: null, isAuthenticated: false, isLoading: false }

    default:
      return {
        ...state,
      }
  }
}
