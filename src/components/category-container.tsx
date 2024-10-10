import { CategoryProps } from './categories-area'
import { CategoryProduct } from './category-product'
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
          <CategoryProduct imageUrl={product.imageUrl} name={product.name} key={product.id} price={product.price} />
        ))}
      </div>
    </div>
  )
}
