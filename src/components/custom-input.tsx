import { ComponentProps, forwardRef, Ref } from 'react'

import { cn } from '@/lib/utils'

import { Input } from './ui/input'

interface CustomInputProps extends ComponentProps<'input'> {
  label: string
  placeholder: string
  hasError?: boolean
  errorMessage?: string
}

function CustomInput(
  { label, placeholder, hasError, errorMessage, ...rest }: CustomInputProps,
  ref: Ref<HTMLInputElement>
) {
  return (
    <div className="flex w-full flex-col gap-1">
      <label className="font-semibold text-black3">{label}</label>
      <Input
        {...rest}
        ref={ref}
        className={cn(
          'shadow-gray-4 w-full bg-gray2 shadow-lg placeholder:font-medium',
          hasError && 'placeholder:text-error focus-visible:ring-error'
        )}
        placeholder={placeholder}
      />
      {errorMessage && <p className="text-right text-xs text-error">{errorMessage}</p>}
    </div>
  )
}

export default forwardRef(CustomInput)

CustomInput.displayName = 'CustomInput'
