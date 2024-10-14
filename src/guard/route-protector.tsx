/* eslint-disable react-hooks/exhaustive-deps */
 

import { ReactNode, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { LoadingGlobal } from '@/components/loading-global'
import { useAppSelector } from '@/hooks/redux.hooks'

export function RouteProtector({ children }: { children: ReactNode }) {
  const { isAuthenticated } = useAppSelector((rootReducer) => rootReducer.userReducer)

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
