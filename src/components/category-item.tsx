import { ComponentProps } from 'react'
import { Link } from 'react-router-dom'

import { cn } from '../lib/utils'

interface CategoryItemProps extends ComponentProps<'div'> {
  className?: string
  categoryName: string
  src: string
  id: string
}

export function CategoryItem({ className, categoryName, id, src, ...rest }: CategoryItemProps) {
  return (
    <div
      className={cn(
        'flex h-full w-full items-center justify-center overflow-x-hidden rounded-md bg-cover bg-center bg-no-repeat',
        className
      )}
      {...rest}
      style={{ backgroundImage: `url(${src})` }}
    >
      <Link
        to={`/category/${id}`}
        className="flex h-16 w-36 flex-col items-center justify-center rounded-md border border-black bg-gray2/45 text-sm font-bold text-white2"
      >
        <p>{categoryName}</p>
        <span className="font-light">Explorar</span>
      </Link>
    </div>
  )
}
