/* eslint-disable @typescript-eslint/no-explicit-any */

import { CategoryProps } from '@/components/categories-area'

import { CategoryActionsTypes } from './category.actions-types'

interface InitalState {
  categories: CategoryProps[]
  isLoading: boolean
}

const initalState: InitalState = {
  categories: [],
  isLoading: false,
}

export const categoryReducer = (state = initalState, action: any): InitalState => {
  switch (action.type) {
    case CategoryActionsTypes.FETCH_CATEGORIES_START:
      return { ...state, isLoading: true }

    case CategoryActionsTypes.FETCH_CATEGORIES_SUCCESS:
      return { ...state, isLoading: false, categories: action.payload }

    case CategoryActionsTypes.FETCH_CATEGORIES_FAILURE:
      return { ...state, isLoading: false }

    default:
      return state
  }
}
