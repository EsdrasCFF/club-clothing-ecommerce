import { LucideIcon } from 'lucide-react'
import { ComponentProps } from 'react'
import { IconType } from 'react-icons'

import { cn } from '@/lib/utils'

import { Button } from './ui/button'

interface CustomButtonProps extends ComponentProps<'button'> {
  icon: LucideIcon | IconType
  title: string
  className?: string
}

export function CustomButton({ icon: Icon, title, className, ...rest }: CustomButtonProps) {
  return (
    <Button {...rest} className="w-full">
      <Icon size={25} /> <span className={cn('ml-2 font-semibold text-white2', className)}>{title}</span>
    </Button>
  )
}
