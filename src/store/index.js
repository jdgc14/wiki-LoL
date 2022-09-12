import { configureStore } from '@reduxjs/toolkit'
import isLoading from './slices/isLoading.slice'
import championsSlice from './slices/champions.slice'
import categoriesChampionsSlice from './slices/categoriesChampions.slice'

export default configureStore({
    reducer: { championsSlice, isLoading, categoriesChampionsSlice },
})
