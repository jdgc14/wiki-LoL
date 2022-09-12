import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { setIsLoading } from './isLoading.slice'

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const championsSlice = createSlice({
    name: 'champions',
    initialState: [],
    reducers: {
        setChampions: (state, action) => {
            return action.payload
        },
    },
})

export const readAllChampionsThunk = () => (dispatch) => {
    dispatch(setIsLoading(true))
    axios
        .get(
            'https://ddragon.leagueoflegends.com/cdn/12.17.1/data/en_US/champion.json'
        )
        .then((res) => dispatch(setChampions(Object.values(res.data.data))))
        .finally(() => dispatch(setIsLoading(false)))
}
export const filterChampionsByCategory = (category) => (dispatch) => {
    dispatch(setIsLoading(true))
    axios
        .get(
            'https://ddragon.leagueoflegends.com/cdn/12.17.1/data/en_US/champion.json'
        )
        .then((res) =>
            dispatch(
                setChampions(
                    Object.values(res.data.data).filter((champion) =>
                        champion.tags.includes(category)
                    )
                )
            )
        )
        .finally(() => dispatch(setIsLoading(false)))
}

export const { setChampions } = championsSlice.actions

export default championsSlice.reducer
