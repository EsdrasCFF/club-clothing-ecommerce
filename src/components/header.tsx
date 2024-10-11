import { signOut } from 'firebase/auth'
import { ShoppingCart } from 'lucide-react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { auth } from '@/config/db/firebase.config'
import { UserContext } from '@/contexts/user-context'

export function Header() {
  const { isAuthenticated } = useContext(UserContext)

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
            <Link to="" onClick={() => signOut(auth)}>
              Sair
            </Link>
          )}
          <ShoppingCart strokeWidth={2} />
        </div>
      </div>
    </header>
  )
}
