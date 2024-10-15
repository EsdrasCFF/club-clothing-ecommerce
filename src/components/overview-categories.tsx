/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { useAppSelector } from '@/hooks/redux.hooks'
import { AppDispatch } from '@/store/store'
import { fetchCategories } from '@/store/toolkit/category/category-slice'

import { CategoryCotainer } from './category-container'

export function OverviewCategories() {
  const dispatch: AppDispatch = useDispatch()
  const { categories } = useAppSelector((rootState) => rootState.categoryReducer)

  useEffect(() => {
    dispatch(fetchCategories())
  }, [])

  return (
    <div className="flex h-full flex-col gap-4 py-5">
      {categories.map((category) => (
        <CategoryCotainer category={category} key={category.id} />
      ))}
    </div>
  )
}
