/* eslint-disable react-hooks/exhaustive-deps */

import { ReactNode, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { LoadingGlobal } from '@/components/loading-global'
import { UserContext } from '@/contexts/user-context'

export function RouteProtector({ children }: { children: ReactNode }) {
  const { isAuthenticated } = useContext(UserContext)

  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) {
      setTimeout(() => {
        return navigate('/login')
      }, 3000)
    }
  }, [isAuthenticated])

  if (!isAuthenticated) {
    return (
      <LoadingGlobal message="Para acessar essa página, você precisa estar autenticado. Aguarde, você será redirecionado para a página de login!" />
    )
  }

  return <>{children}</>
}
