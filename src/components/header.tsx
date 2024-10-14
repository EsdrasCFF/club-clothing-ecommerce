/* eslint-disable @typescript-eslint/no-explicit-any */

import { onAuthStateChanged, signOut } from 'firebase/auth'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { ShoppingCart } from 'lucide-react'
import { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { auth, db } from '@/config/db/firebase.config'
import { CartContext } from '@/contexts/cart-context'
import { loginUser, logoutUser } from '@/store/reducers/user/user.actions'
import { User } from '@/store/reducers/user/user.reducer'

export function Header() {
  const { onOpenCart, productsTotalQuantity } = useContext(CartContext)

  const dispatch = useDispatch()

  const { isAuthenticated } = useSelector((rootReducer: any) => rootReducer.userReducer)

  function handleSignOutClick() {
    dispatch(logoutUser())
    signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      const isSigningOut = isAuthenticated && !user
      if (isSigningOut) {
        dispatch(logoutUser())
        return
      }

      const isSigningIn = !isAuthenticated && user
      if (isSigningIn) {
        const querySnapshot = await getDocs(query(collection(db, 'users'), where('id', '==', user.uid)))
        const userFromFirestore = querySnapshot.docs[0]?.data()

        if (userFromFirestore) {
          dispatch(loginUser(userFromFirestore as User))
        }

        return
      }
    })

    return () => unsubscribe()
  }, [isAuthenticated, dispatch])

  return (
    <header className="flex max-h-16 min-h-16 w-full justify-center bg-customPrimary">
      <div className="flex w-full max-w-screen-xl items-center justify-between px-5">
        <Link to="/">
          <h2 className="text-2xl font-bold leading-none text-white2">CLUB CLOTHING</h2>
        </Link>

        <div className="flex items-center gap-10 text-base font-semibold leading-none text-white">
          <Link to="/explore">Explorar</Link>
          {!isAuthenticated && (
            <>
              <Link to="/login"> Login </Link>
              <Link to="/sign-up"> Criar Conta </Link>
            </>
          )}

          {isAuthenticated && (
            <Link to="" onClick={handleSignOutClick}>
              Sair
            </Link>
          )}

          <div className="relative">
            <ShoppingCart strokeWidth={2} onClick={onOpenCart} className="hover:cursor-pointer" />
            <div className="absolute right-[-12px] top-[-12px] w-4 rounded-full bg-white text-center text-xs text-black3">
              {productsTotalQuantity}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
