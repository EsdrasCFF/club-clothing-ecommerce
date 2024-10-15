import { collection, getDocs } from 'firebase/firestore'
import { Dispatch } from 'redux'

import { CategoryProps } from '@/components/categories-area'
import { db } from '@/config/db/firebase.config'
import { categoryConverter } from '@/lib/converters/firebase.converters'

import { CategoryActionsTypes } from './category.actions-types'

export const fetchCategories = () => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: CategoryActionsTypes.FETCH_CATEGORIES_START })

    try {
      const categoriesFromFirestore: CategoryProps[] = []

      const querySnapshot = await getDocs(collection(db, 'categories').withConverter(categoryConverter))

      querySnapshot.forEach((doc) => {
        categoriesFromFirestore.push(doc.data())
      })

      dispatch({ type: CategoryActionsTypes.FETCH_CATEGORIES_SUCCESS, payload: categoriesFromFirestore })
    } catch (error) {
      console.error(error)
      dispatch({ type: CategoryActionsTypes.FETCH_CATEGORIES_FAILURE })
    }
  }
}
