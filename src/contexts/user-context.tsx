import { createContext, ReactNode, useState } from 'react'

export interface User {
  firstName: string
  lastName: string
  email: string
  provider: 'firebase' | 'google'
}

interface IUserContext {
  currentUser: null | User
  isAuthenticated: boolean
  loginUser: (user: User) => void
  logoutUser: () => void
}

export const UserContext = createContext<IUserContext>({
  currentUser: null,
  isAuthenticated: false,
  loginUser() {},
  logoutUser() {},
})

export function UserContextProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null)

  // console.log({ currentUser })

  const isAuthenticated = currentUser !== null

  function loginUser(user: User) {
    setCurrentUser(user)
  }

  function logoutUser() {
    setCurrentUser(null)
  }

  return (
    <UserContext.Provider
      value={{
        currentUser,
        isAuthenticated,
        loginUser,
        logoutUser,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
