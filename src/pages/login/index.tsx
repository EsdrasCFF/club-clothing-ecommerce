import {} from 'lucide-react'
import { CiLogin } from 'react-icons/ci'
import { FaGoogle } from 'react-icons/fa'

import { CustomButton } from '@/components/custom-button'
import { CustomInput } from '@/components/custom-input'

import { Separator } from '../../components/ui/separator'

export function LoginPage() {
  return (
    <main className="flex h-full w-full items-center justify-center px-5">
      <div className="flex w-full max-w-[28rem] flex-col items-center justify-center gap-5">
        <h3 className="text-xl font-semibold text-black">Entre com sua conta</h3>
        <CustomButton icon={FaGoogle} title="Entrar com Google" className="w-full" />
        <p className="font-medium">ou entre com seu e-mail</p>
        <Separator className="bg-gray4" />
        <CustomInput label="E-mail" placeholder="Digite seu e-mail" />
        <CustomInput label="Senha" placeholder="Digite sua senha" />
        <CustomButton icon={CiLogin} title="Entrar" />
      </div>
    </main>
  )
}
