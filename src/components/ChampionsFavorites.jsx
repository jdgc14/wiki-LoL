import React from 'react'
import { useSelector } from 'react-redux'
import ChampionCard from './ChampionCard'

const ChampionsFavorites = () => {
    const isLoading = useSelector((state) => state.isLoading)

    const championsFavorites = useSelector(
        (state) => state.championsFavoritesSlice
    )

    return (
        <div className="" style={{ minHeight: '80vh' }}>
            {isLoading ? (
                <div className="spinner-border" role="status">
                    <span className="visually-hidden"></span>
                </div>
            ) : (
                <div className="">
                    <h1 className="text-warning fw-bold title-favorites">
                        Champions Favorites
                    </h1>
                    <div className="col-11 mx-auto">
                        <div className="row">
                            {championsFavorites?.map((champion) => (
                                <ChampionCard
                                    key={champion.id}
                                    champion={champion}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ChampionsFavorites
