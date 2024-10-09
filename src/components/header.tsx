import { onAuthStateChanged, signOut } from 'firebase/auth'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { ShoppingCart } from 'lucide-react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { auth, db } from '@/config/db/firebase.config'
import { User, UserContext } from '@/contexts/user-context'

export function Header() {
  const { isAuthenticated, logoutUser, loginUser } = useContext(UserContext)

  onAuthStateChanged(auth, async (user) => {
    const isSigningOut = isAuthenticated && !user

    if (isSigningOut) {
      return logoutUser()
    }

    const isSigningIn = !isAuthenticated && user

    if (isSigningIn) {
      const querySnapshot = await getDocs(query(collection(db, 'users'), where('id', '==', user.uid)))

      const userFromFirestore = querySnapshot.docs[0].data()

      return loginUser(userFromFirestore as User)
    }
  })

  return (
    <header className="flex h-16 w-full justify-center bg-customPrimary">
      <div className="flex w-full max-w-screen-xl items-center justify-between px-5">
        <h2 className="text-2xl font-bold leading-none text-white2">CLUB CLOTHING</h2>

        <div className="flex items-center gap-10 text-base font-semibold leading-none text-white">
          <Link to={''}>Explorar</Link>
          {!isAuthenticated && (
            <>
              <Link to="/login"> Login </Link>
              <Link to="/sign-up"> Criar Conta </Link>
            </>
          )}
          <Link to="" onClick={() => signOut(auth)}>
            Sair
          </Link>
          <ShoppingCart strokeWidth={2} />
        </div>
      </div>
    </header>
  )
}
