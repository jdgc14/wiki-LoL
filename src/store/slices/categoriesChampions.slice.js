import { createSlice } from '@reduxjs/toolkit'

export const categoriesChampionsSlice = createSlice({
    name: 'categoriesChampions',
    initialState: [
        'Fighter',
        'Mage',
        'Assassin',
        'Marksman',
        'Tank',
        'Support',
    ],
    reducers: {},
})

export const {} = categoriesChampionsSlice.actions

export default categoriesChampionsSlice.reducer
