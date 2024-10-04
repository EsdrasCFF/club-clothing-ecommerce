import { CategoryItem } from './category-item'

export interface CategoryProps {
  id: string
  name: string
  displayName: string
  imageUrl: string
}

const imageUrls = ['/category1.png', '/category2.png', '/category3.png', '/category4.png', '/category5.png']

export function CategoriesArea() {
  // const [categories, setCategories] = useState<CategoryProps[]>([])

  // console.log(categories)

  // useEffect(() => {
  //   const fetchCategories = async () => {
  //     const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/api/categories`)

  //     if (response.status != 200) {
  //       throw new Error('Failed to fetch categories')
  //     }

  //     const data: CategoryProps[] = await response.json()

  //     setCategories(data)
  //   }

  //   fetchCategories()
  // }, [])

  const categoriesArray = ['Tênis', 'Chapéus', 'Jaquetas', 'Feminino', 'Masculino']

  return (
    <main className="flex h-full w-full justify-center px-5">
      <div className="grid h-full w-full grid-cols-2 gap-2">
        {categoriesArray.map((category, index) => {
          if (index == 2) {
            return (
              <CategoryItem
                className="ro col-span-2"
                key={String(category)}
                categoryName={categoriesArray[index]}
                src={imageUrls[index]}
              />
            )
          }

          return <CategoryItem key={String(category)} categoryName={categoriesArray[index]} src={imageUrls[index]} />
        })}
      </div>
    </main>
  )
}
