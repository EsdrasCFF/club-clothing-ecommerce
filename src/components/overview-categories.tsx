/* eslint-disable react-hooks/exhaustive-deps */

import { useContext, useEffect } from 'react'

import { CategoryContext } from '@/contexts/category-context'

import { CategoryCotainer } from './category-container'

export function OverviewCategories() {
  const { categories, fetchCategories } = useContext(CategoryContext)

  useEffect(() => {
    if (categories.length === 0) {
      fetchCategories()
    }
  }, [])

  return (
    <div className="flex h-full flex-col gap-4 py-5">
      {categories.map((category) => (
        <CategoryCotainer category={category} key={category.id} />
      ))}
    </div>
  )
}
