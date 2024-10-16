/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { useAppSelector } from '@/hooks/redux.hooks'
import { AppDispatch } from '@/store/store'
import { fetchCategories } from '@/store/toolkit/category/category-slice'

import { CategoryItem } from './category-item'
import { LoadingGlobal } from './loading-global'

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
  const { categories, isLoading } = useAppSelector((rootState) => rootState.categoryReducer)

  const dispatch: AppDispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategories())
  }, [])

  if (isLoading) {
    return <LoadingGlobal />
  }

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
                id={category.id}
              />
            )
          }

          return (
            <CategoryItem
              key={category.name}
              categoryName={category.displayName}
              src={category.imageUrl}
              id={category.id}
            />
          )
        })}
      </div>
    </main>
  )
}
