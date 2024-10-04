import { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

import { Input } from './ui/input'

interface CustomInputProps extends ComponentProps<'input'> {
  label: string
  placeholder: string
  hasError?: boolean
}

export function CustomInput({ label, placeholder, hasError, ...rest }: CustomInputProps) {
  return (
    <div className="flex w-full flex-col gap-1">
      <label className="font-semibold text-black3">{label}</label>
      <Input
        {...rest}
        className={cn(
          'shadow-gray-4 w-full bg-gray2 shadow-lg placeholder:font-medium',
          hasError && 'border border-error'
        )}
        placeholder={placeholder}
      />
    </div>
  )
}
