import { zodResolver } from '@hookform/resolvers/zod'
import { AuthError, AuthErrorCodes, signInWithEmailAndPassword } from 'firebase/auth'
import {} from 'lucide-react'
import { useForm } from 'react-hook-form'
import { CiLogin } from 'react-icons/ci'
import { FaGoogle } from 'react-icons/fa'
import { toast } from 'sonner'
import { z } from 'zod'

import { CustomButton } from '@/components/custom-button'
import CustomInput from '@/components/custom-input'
import { auth } from '@/config/db/firebase.config'

import { Separator } from '../../components/ui/separator'

const accountLoginSchema = z.object({
  email: z.string({ required_error: 'Email is required' }).email({ message: 'Invalid e-mail' }),
  password: z.string({ required_error: 'Password is required' }),
})

type AccountLoginData = z.infer<typeof accountLoginSchema>

export function SignInPage() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<AccountLoginData>({
    resolver: zodResolver(accountLoginSchema),
  })

  async function onSubmit(data: AccountLoginData) {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password)
    } catch (error) {
      const err = error as AuthError
      console.log({ err })
      if (err.code === AuthErrorCodes.INVALID_LOGIN_CREDENTIALS || err.code === AuthErrorCodes.USER_DELETED) {
        toast.error('Password or e-mail invalid')
        setError('password', { message: 'Email or Password is invalid' })
        setError('email', { message: 'Email or Password is invalid' })
        return
      }
    }
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
