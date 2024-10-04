import { zodResolver } from '@hookform/resolvers/zod'
import {} from 'lucide-react'
import { useForm } from 'react-hook-form'
import { CiLogin } from 'react-icons/ci'
import { z } from 'zod'

import { CustomButton } from '@/components/custom-button'
import CustomInput from '@/components/custom-input'

import { Separator } from '../../components/ui/separator'

const createAccountSchema = z
  .object({
    name: z
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
    confirmationPassword: z.string({ required_error: 'Password is required' }),
  })
  .refine(
    (values) => {
      if (values.password == values.confirmationPassword) {
        return true
      }
      return false
    },
    { message: 'Password does not match!', path: ['confirmationPassword'] }
  )

type CreateAccountData = z.infer<typeof createAccountSchema>

export function SignUpPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateAccountData>({
    resolver: zodResolver(createAccountSchema),
  })

  console.log(errors)

  function onSubmit(data: CreateAccountData) {
    console.log(data)
  }

  return (
    <main className="flex h-full w-full items-center justify-center px-5">
      <div className="flex w-full max-w-[28rem] flex-col items-center justify-center gap-5">
        <h3 className="text-xl font-semibold text-black">Crie a sua conta</h3>
        <Separator className="bg-gray4" />
        <CustomInput
          label="Nome"
          placeholder="Digite seu nome"
          {...register('name')}
          hasError={!!errors.name}
          errorMessage={errors.name?.message}
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
          {...register('confirmationPassword')}
          hasError={!!errors.confirmationPassword}
          errorMessage={errors.confirmationPassword?.message}
        />
        <CustomButton icon={CiLogin} title="Criar Conta" onClick={handleSubmit(onSubmit)} />
      </div>
    </main>
  )
}
