import { LucideIcon } from 'lucide-react'
import { ComponentProps } from 'react'
import { IconType } from 'react-icons'

import { Button } from './ui/button'

interface ButtonIcontProps extends ComponentProps<'button'> {
  icon: LucideIcon | IconType
  title: string
}

export function ButtonIcon({ icon: Icon, title, ...rest }: ButtonIcontProps) {
  return (
    <Button {...rest} className="w-full">
      <Icon size={25} /> <span className="ml-2 font-semibold text-white2">{title}</span>
    </Button>
  )
}
