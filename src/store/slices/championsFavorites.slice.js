import { createSlice } from '@reduxjs/toolkit'

export const championsFavoritesSlice = createSlice({
    name: 'championsFavorites',
    initialState: [],
    reducers: {
        addFavorite: (state, action) => {
            state.push(action.payload)
        },
        deleteFavorite: (state, action) => {
            state.splice(action.payload, 1)
        },
    },
})

export const { addFavorite, deleteFavorite } = championsFavoritesSlice.actions

export default championsFavoritesSlice.reducer
