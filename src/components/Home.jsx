import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { readAllChampionsThunk } from '../store/slices/champions.slice'
import ChampionCard from './ChampionCard'
import FilterByCategory from './FilterByCategory'

const Home = () => {
    const dispatch = useDispatch()

    const champions = useSelector((state) => state.championsSlice)

    const isLoading = useSelector((state) => state.isLoading)

    useEffect(() => {
        dispatch(readAllChampionsThunk())
    }, [])
    return (
        <>
            {isLoading ? (
                <div className="spinner-border" role="status">
                    <span className="visually-hidden"></span>
                </div>
            ) : (
                <div className="">
                    <FilterByCategory />
                    {/* <h1>Champions</h1> */}
                    <div className="col-10 mx-auto">
                        <div className="row">
                            {champions?.map((champion) => (
                                <ChampionCard
                                    key={champion.id}
                                    champion={champion}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Home
