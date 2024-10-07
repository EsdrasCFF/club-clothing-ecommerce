import { collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'

import { db } from '@/config/db/firebase.config'
import { categoryConverter } from '@/lib/converters/firebase.converters'

import { CategoryItem } from './category-item'

export interface Product {
  id: string
  imageUrl: string
  name: string
  price: number
}

export interface CategoryProps {
  id: string
  name: string
  displayName: string
  imageUrl: string
  products: Product[]
}

export function CategoriesArea() {
  const [categories, setCategories] = useState<CategoryProps[]>([])

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesFromFirestore: CategoryProps[] = []

        const querySnapshot = await getDocs(collection(db, 'categories').withConverter(categoryConverter))

        querySnapshot.forEach((doc) => {
          categoriesFromFirestore.push(doc.data())
        })

        setCategories(categoriesFromFirestore)
        console.log({ categoriesFromFirestore })
      } catch (e) {
        console.log('Error to fetch categories:', e)
      }
    }

    fetchCategories()
  }, [])

  return (
    <main className="flex h-full w-full justify-center px-5">
      <div className="grid h-full w-full grid-cols-2 gap-2">
        {categories.map((category, index) => {
          if (index == 2) {
            return (
              <CategoryItem
                className="ro col-span-2"
                key={category.name}
                categoryName={category.displayName}
                src={category.imageUrl}
              />
            )
          }

          return <CategoryItem key={category.name} categoryName={category.displayName} src={category.imageUrl} />
        })}
      </div>
    </main>
  )
}
