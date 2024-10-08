import { signOut } from 'firebase/auth'
import { ShoppingCart } from 'lucide-react'
import { Link } from 'react-router-dom'

import { auth } from '@/config/db/firebase.config'

export function Header() {
  return (
    <header className="flex h-16 w-full justify-center bg-customPrimary">
      <div className="flex w-full max-w-screen-xl items-center justify-between px-5">
        <h2 className="text-2xl font-bold leading-none text-white2">CLUB CLOTHING</h2>

        <div className="flex items-center gap-10 text-base font-semibold leading-none text-white">
          <Link to={''}>Explorar</Link>
          <Link to="/login"> Login </Link>
          <Link to="/sign-up"> Criar Conta </Link>
          <Link to="" onClick={() => signOut(auth)}>
            {' '}
            Sair{' '}
          </Link>
          <ShoppingCart strokeWidth={2} />
        </div>
      </div>
    </header>
  )
}
