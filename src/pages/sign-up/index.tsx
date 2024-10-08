import { zodResolver } from '@hookform/resolvers/zod'
import { AuthError, AuthErrorCodes, createUserWithEmailAndPassword } from 'firebase/auth'
import { addDoc, collection } from 'firebase/firestore'
import {} from 'lucide-react'
import { useForm } from 'react-hook-form'
import { CiLogin } from 'react-icons/ci'
import { toast } from 'sonner'
import { z } from 'zod'

import { CustomButton } from '@/components/custom-button'
import CustomInput from '@/components/custom-input'
import { auth, db } from '@/config/db/firebase.config'

import { Separator } from '../../components/ui/separator'

const createAccountSchema = z
  .object({
    firstName: z
      .string({ required_error: 'Name is required' })
      .trim()
      .min(2, { message: 'Name should be greater or equal 3 characters' }),
    lastName: z
      .string({ required_error: 'Name is required' })
      .trim()
      .min(2, { message: 'Name should be greater or equal 3 characters' }),
    email: z.string({ required_error: 'Email is required' }).email({ message: 'Invalid e-mail' }),
    password: z
      .string({ required_error: 'Password is required' })
      .min(6, { message: 'Shold be greater or equal 6 characters' }),
    passwordConfimation: z.string({ required_error: 'Password is required' }).trim(),
  })
  .refine(
    (values) => {
      if (values.password == values.passwordConfimation) {
        return true
      }
      return false
    },
    { message: 'Password does not match!', path: ['passwordConfimation'] }
  )

type CreateAccountData = z.infer<typeof createAccountSchema>

export function SignUpPage() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<CreateAccountData>({
    resolver: zodResolver(createAccountSchema),
  })

  async function onSubmit(data: CreateAccountData) {
    try {
      const userCredentials = await createUserWithEmailAndPassword(auth, data.email, data.password)

      await addDoc(collection(db, 'users'), {
        id: userCredentials.user.uid,
        firstName: data.firstName,
        lastName: data.lastName,
        email: userCredentials.user.email,
        provider: 'firebase',
      })
    } catch (e) {
      const err = e as AuthError
      if (err.code === AuthErrorCodes.EMAIL_EXISTS) {
        toast.error('This e-mail already in use!', { position: 'top-right' })
        setError('email', { message: 'This e-mail already in use' })
        return
      }
    }
  }

  return (
    <main className="flex h-full w-full items-center justify-center px-5">
      <div className="flex w-full max-w-[28rem] flex-col items-center justify-center gap-5">
        <h3 className="text-xl font-semibold text-black">Crie a sua conta</h3>
        <Separator className="bg-gray4" />
        <CustomInput
          label="Nome"
          placeholder="Digite seu nome"
          {...register('firstName')}
          hasError={!!errors.firstName}
          errorMessage={errors.firstName?.message}
        />
        <CustomInput
          label="Sobrenome"
          placeholder="Digite seu sobrenome"
          {...register('lastName')}
          hasError={!!errors.lastName}
          errorMessage={errors.lastName?.message}
        />
        <CustomInput
          label="Email"
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
        <CustomInput
          type="password"
          label="Confirmação de Senha"
          placeholder="Confirme sua senha"
          {...register('passwordConfimation')}
          hasError={!!errors.passwordConfimation}
          errorMessage={errors.passwordConfimation?.message}
        />
        <CustomButton icon={CiLogin} title="Criar Conta" onClick={handleSubmit(onSubmit)} />
      </div>
    </main>
  )
}
