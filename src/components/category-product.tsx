import { currencyFormat } from '@/lib/utils'

interface CategoryProductPros {
  imageUrl: string
  name: string
  price: number
}

export function CategoryProduct({ imageUrl, name, price }: CategoryProductPros) {
  return (
    <div className="h-full w-full">
      <div className="h-full max-h-96 w-full max-w-[18.75rem] overflow-hidden rounded-md shadow-lg shadow-gray2">
        <img src={imageUrl} alt={`image do producto ${name}`} className="h-full w-full object-cover" />
      </div>
      <div className="mt-2 flex items-center justify-between text-sm font-medium leading-none">
        <span className="capitalize">{name}</span>
        <span>{currencyFormat(price)}</span>
      </div>
    </div>
  )
}
