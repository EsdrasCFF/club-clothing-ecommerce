import { Product } from './categories-area'
import { ProductItem } from './product-item'

interface CategoryProducts {
  products: Product[]
}

export function CategoryProducts({ products }: CategoryProducts) {
  return (
    <div className="grid w-full grid-cols-4 gap-5">
      {products.map((product) => (
        <ProductItem imageUrl={product.imageUrl} name={product.name} key={product.id} price={product.price} />
      ))}
    </div>
  )
}
