/* eslint-disable react-hooks/exhaustive-deps */

import { CheckCircleIcon, HomeIcon, XCircle } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useSearchParams } from 'react-router-dom'

import { CustomButton } from '@/components/custom-button'
import Confetti, { ConfettiRef } from '@/components/ui/confetti'
import { AppDispatch } from '@/store/store'
import { clearProducts } from '@/store/toolkit/cart/cart-slice'

export function PaymentConfirmationPage() {
  const [searchParams] = useSearchParams()

  const status = searchParams.get('success')

  const dispatch: AppDispatch = useDispatch()

  const confettiRef = useRef<ConfettiRef>(null)

  const navigate = useNavigate()

  function handleGoToHome() {
    navigate('/')
  }

  function handleClearProducts() {
    dispatch(clearProducts())
  }

  useEffect(() => {
    if (status === 'true') {
      handleClearProducts()
      confettiRef.current!.fire({})
    }
  }, [dispatch])

  return (
    <main className="relative flex h-full w-full flex-col items-center justify-center px-5">
      <div className="flex max-w-lg flex-col items-center justify-center gap-10">
        {status === 'true' && (
          <>
            <CheckCircleIcon size={120} className="text-green-800" />
            <p>Sua compra foi finalizada com sucesso!</p>
            <Confetti ref={confettiRef} className="absolute left-0 top-0 z-0 size-full" />
          </>
        )}

        {status != 'true' && (
          <>
            <XCircle size={120} className="text-rose-600" />
            <p>Ocorreu um erro ao processar sua compra, tente novamente!</p>
          </>
        )}

        <CustomButton
          icon={HomeIcon}
          title="Ir para página inical"
          onClick={handleGoToHome}
          className="z-10 hover:cursor-pointer"
        />
      </div>
    </main>
  )
}
