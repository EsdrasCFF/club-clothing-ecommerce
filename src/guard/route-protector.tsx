/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { ReactNode, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { LoadingGlobal } from '@/components/loading-global'

export function RouteProtector({ children }: { children: ReactNode }) {
  const { isAuthenticated } = useSelector((rootReducer: any) => rootReducer.userReducer)

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
