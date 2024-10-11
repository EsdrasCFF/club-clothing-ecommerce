import { CategoryProps } from './categories-area'
import { ProductItem } from './product-item'
import { Title } from './title'

interface CategoryContainerProps {
  category: CategoryProps
}

export function CategoryCotainer({ category }: CategoryContainerProps) {
  return (
    <div className="flex flex-col gap-2">
      <Title text={category.name} />
      <div className="flex gap-5">
        {category.products.slice(0, 4).map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </div>
    </div>
  )
}
