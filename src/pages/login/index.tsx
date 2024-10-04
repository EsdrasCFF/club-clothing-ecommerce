import { zodResolver } from '@hookform/resolvers/zod'
import {} from 'lucide-react'
import { useForm } from 'react-hook-form'
import { CiLogin } from 'react-icons/ci'
import { FaGoogle } from 'react-icons/fa'
import { z } from 'zod'

import { CustomButton } from '@/components/custom-button'
import CustomInput from '@/components/custom-input'

import { Separator } from '../../components/ui/separator'

const accountLoginSchema = z.object({
  email: z.string({ required_error: 'Email is required' }).email({ message: 'Invalid e-mail' }),
  password: z
    .string({ required_error: 'Password is required' })
    .min(6, { message: 'Shold be greater or equal 6 characters' }),
})

type AccountLoginData = z.infer<typeof accountLoginSchema>

export function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AccountLoginData>({
    resolver: zodResolver(accountLoginSchema),
  })

  console.log(errors)

  function onSubmit(data: AccountLoginData) {
    console.log(data)
  }

  return (
    <main className="flex h-full w-full items-center justify-center px-5">
      <div className="flex w-full max-w-[28rem] flex-col items-center justify-center gap-5">
        <h3 className="text-xl font-semibold text-black">Entre com sua conta</h3>
        <CustomButton icon={FaGoogle} title="Entrar com Google" className="w-full" />
        <p className="font-medium">ou entre com seu e-mail</p>
        <Separator className="bg-gray4" />
        <CustomInput
          label="E-mail"
          placeholder="Digite seu e-mail"
          {...register('email')}
          hasError={!!errors.email}
          errorMessage={errors.email?.message}
        />
        <CustomInput
          type="password"
          label="Senha"
          placeholder="Digite sua senha"
          {...register('password')}
          hasError={!!errors.password}
          errorMessage={errors.password?.message}
        />
        <CustomButton icon={CiLogin} title="Entrar" onClick={handleSubmit(onSubmit)} />
      </div>
    </main>
  )
}
