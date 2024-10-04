import {} from 'lucide-react'
import { CiLogout } from 'react-icons/ci'
import { FaGoogle } from 'react-icons/fa'

import { ButtonIcon } from '../../components/button-icon'
import { InputWithLabel } from '../../components/input-label'
import { Separator } from '../../components/ui/separator'
export function LoginPage() {
  return (
    <main className="flex h-full w-full items-center justify-center px-5">
      <div className="flex w-full max-w-[28rem] flex-col items-center justify-center gap-5">
        <h3 className="text-xl font-semibold text-black">Entre com sua conta</h3>
        <ButtonIcon icon={FaGoogle} title="Entrar com Google" className="w-full" />
        <p className="font-medium">ou entre com seu e-mail</p>
        <Separator className="bg-gray4" />
        <InputWithLabel label="E-mail" placeholder="Digite seu e-mail" />
        <InputWithLabel label="Senha" placeholder="Digite sua senha" />
        <ButtonIcon icon={CiLogout} title="Entrar" />
      </div>
    </main>
  )
}
