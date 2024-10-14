/* eslint-disable @typescript-eslint/no-explicit-any */

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
    case 'LOGIN_USER':
      return { ...state, currentUser: action.payload, isAuthenticated: true, isLoading: false }

    case 'LOGOUT_USER':
      return { ...state, currentUser: null, isAuthenticated: false, isLoading: false }

    default:
      return {
        ...state,
      }
  }
}
