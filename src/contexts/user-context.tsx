import { onAuthStateChanged } from 'firebase/auth'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { createContext, ReactNode, useEffect, useState } from 'react'

import { auth, db } from '@/config/db/firebase.config'

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
  isLoading: boolean
}

export const UserContext = createContext<IUserContext>({
  currentUser: null,
  isAuthenticated: false,
  loginUser() {},
  logoutUser() {},
  isLoading: false,
})

export function UserContextProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const isAuthenticated = currentUser !== null

  function loginUser(user: User) {
    setCurrentUser(user)
  }

  function logoutUser() {
    setCurrentUser(null)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      const isSigningOut = isAuthenticated && !user
      if (isSigningOut) {
        logoutUser()
        setIsLoading(false)
        return
      }

      const isSigningIn = !isAuthenticated && user
      if (isSigningIn) {
        const querySnapshot = await getDocs(query(collection(db, 'users'), where('id', '==', user.uid)))
        const userFromFirestore = querySnapshot.docs[0]?.data()

        if (userFromFirestore) {
          loginUser(userFromFirestore as User)
        }
        setIsLoading(false)
        return
      }

      setIsLoading(false)
    })

    return () => unsubscribe()
  }, [isAuthenticated])

  return (
    <UserContext.Provider
      value={{
        currentUser,
        isAuthenticated,
        loginUser,
        logoutUser,
        isLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
