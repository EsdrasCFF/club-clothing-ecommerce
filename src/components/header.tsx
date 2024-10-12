import { signOut } from 'firebase/auth'
import { ShoppingCart } from 'lucide-react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { auth } from '@/config/db/firebase.config'
import { CartContext } from '@/contexts/cart-context'
import { UserContext } from '@/contexts/user-context'

export function Header() {
  const { isAuthenticated } = useContext(UserContext)
  const { onOpenCart, productsTotalQuantity } = useContext(CartContext)

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
