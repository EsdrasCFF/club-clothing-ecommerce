import { ComponentProps } from 'react'

import { Input } from './ui/input'

interface InputWithLabelProps extends ComponentProps<'input'> {
  label: string
  placeholder: string
}

export function InputWithLabel({ label, placeholder, ...rest }: InputWithLabelProps) {
  return (
    <div className="flex w-full flex-col gap-1">
      <label className="font-semibold text-black3">{label}</label>
      <Input
        {...rest}
        className="shadow-gray-4 w-full bg-gray2 shadow placeholder:font-medium"
        placeholder={placeholder}
      />
    </div>
  )
}
