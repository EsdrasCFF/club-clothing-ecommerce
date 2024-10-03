import { ShoppingCart } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header className="flex h-16 w-full items-center justify-between bg-customPrimary px-5">
      <h2 className="text-2xl font-bold leading-none text-white2">CLUB CLOTHING</h2>

      <div className="flex items-center gap-10 text-base font-semibold leading-none text-white">
        <Link to={''}>Explorar</Link>
        <Link to={''}> Login </Link>
        <Link to={''}> Criar Conta </Link>
        <ShoppingCart strokeWidth={2} />
      </div>
    </header>
  )
}
