import { collection, getDocs } from 'firebase/firestore'
import { createContext, ReactNode, useState } from 'react'

import { CategoryProps } from '@/components/categories-area'
import { db } from '@/config/db/firebase.config'
import { categoryConverter } from '@/lib/converters/firebase.converters'

interface ICategoryContext {
  categories: CategoryProps[]
  fetchCategories: () => Promise<void>
  isLoading: boolean
}

export const CategoryContext = createContext<ICategoryContext>({
  categories: [],
  fetchCategories: () => Promise.resolve(),
  isLoading: false,
})

export function CategoryContextProvider({ children }: { children: ReactNode }) {
  const [categories, setCategories] = useState<CategoryProps[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchCategories = async () => {
    try {
      setIsLoading(true)
      const categoriesFromFirestore: CategoryProps[] = []

      const querySnapshot = await getDocs(collection(db, 'categories').withConverter(categoryConverter))

      querySnapshot.forEach((doc) => {
        categoriesFromFirestore.push(doc.data())
      })

      setCategories(categoriesFromFirestore)
    } catch (e) {
      console.log('Error to fetch categories:', e)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <CategoryContext.Provider value={{ categories, fetchCategories, isLoading }}>{children}</CategoryContext.Provider>
  )
}
