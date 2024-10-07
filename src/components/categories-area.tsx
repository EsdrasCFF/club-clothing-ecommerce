/* eslint-disable @typescript-eslint/no-unused-vars */

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

const imageUrls = ['/category1.png', '/category2.png', '/category3.png', '/category4.png', '/category5.png']

export function CategoriesArea() {
  const [categories, setCategories] = useState<CategoryProps[]>([])

  const categoriesArray = ['Tênis', 'Chapéus', 'Jaquetas', 'Feminino', 'Masculino']

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
