import { createSlice,PayloadAction } from '@reduxjs/toolkit'

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

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<User>) => {
      state.currentUser = action.payload
      state.isAuthenticated = true
      state.isLoading = false
    },
    logoutUser: (state) => {
      state.currentUser = null
      state.isAuthenticated = false
      state.isLoading = false
    },
  },
})

export const { loginUser, logoutUser } = userSlice.actions

export default userSlice.reducer
