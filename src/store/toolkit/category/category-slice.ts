import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { collection,getDocs } from 'firebase/firestore'

import { CategoryProps } from '@/components/categories-area'
import { db } from '@/config/db/firebase.config'
import { categoryConverter } from '@/lib/converters/firebase.converters'

export const fetchCategories = createAsyncThunk('categories/fetch', async () => {
  const categoriesFromFirestore: CategoryProps[] = []

  const querySnapshot = await getDocs(collection(db, 'categories').withConverter(categoryConverter))

  querySnapshot.forEach((doc) => {
    categoriesFromFirestore.push(doc.data())
  })

  return categoriesFromFirestore
})

interface InitialState {
  categories: CategoryProps[]
  isLoading: boolean
}

const initialState: InitialState = {
  categories: [],
  isLoading: false,
}

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //inital action
    builder.addCase(fetchCategories.pending, (state) => {
      state.isLoading = true
    })
    // success case
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload
      state.isLoading = false
    })
    // error case
    builder.addCase(fetchCategories.rejected, (state) => {
      state.isLoading = false
    })
  },
})

export default categorySlice.reducer
