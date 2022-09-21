import React, { useEffect, useState } from 'react'
import imgs from '../assets/imgs'
import '../styles/ChampionCard.css'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
    addFavorite,
    deleteFavorite,
} from '../store/slices/championsFavorites.slice'
import { filterChampionsByCategory } from '../store/slices/champions.slice'

const ChampionCard = ({ champion }) => {
    const dispatch = useDispatch()

    const [isFavorite, setIsFavorite] = useState(false)

    const championsFavorites = useSelector(
        (state) => state.championsFavoritesSlice
    )

    const isOrNotFavorite = () => {
        if (
            championsFavorites.find(
                (championFavorite) => championFavorite.id === champion.id
            )
        ) {
            setIsFavorite(true)
        } else {
            setIsFavorite(false)
        }
    }

    const favorite = (champion) => {
        dispatch(addFavorite(champion))
    }

    const unfavorite = (champion) => {
        const indexChampion = championsFavorites.indexOf(
            championsFavorites.find(
                (championFavorite) => championFavorite.id === champion.id
            )
        )
        dispatch(deleteFavorite(indexChampion))
    }

    useEffect(isOrNotFavorite, [championsFavorites])

    const imgUrl =
        'https://ddragon.leagueoflegends.com/cdn/12.17.1/img/champion/'

    const changeCategory = (category) => {
        dispatch(filterChampionsByCategory(category))
    }

    return (
        <div className="col-8 col-sm-6 col-md-4 col-lg-3 mx-auto my-3">
            <div className="p-3 border rounded bg-card position-relative zoom">
                <div
                    className="position-absolute text-warning"
                    style={{ right: '10px', top: '5px', cursor: 'pointer' }}
                >
                    {isFavorite ? (
                        <i
                            className="fa-solid fa-star"
                            onClick={() => unfavorite(champion)}
                        ></i>
                    ) : (
                        <i
                            className="fa-regular fa-star"
                            onClick={() => favorite(champion)}
                        ></i>
                    )}
                </div>
                <Link
                    to={`/champion/${champion.id}`}
                    className="link-champion link-pointer"
                >
                    <div>
                        <img
                            src={imgUrl + champion.id + '.png'}
                            loading="lazy"
                        />
                    </div>
                    <h3 className="fw-bold">{champion.name}</h3>
                </Link>
                <div className="d-flex justify-content-center gap-3">
                    {champion.tags.map((tag) => (
                        <button
                            key={tag}
                            onClick={() => changeCategory(tag)}
                            className={`bg-${tag.toLowerCase()} rounded border col-6 col-lg-4 fw-bold tag-champion d-flex`}
                        >
                            <small className="position-absolute">{tag}</small>
                            <div
                                className={`bg-${tag.toLowerCase()} tag-transition col-12`}
                            >
                                <img src={imgs[tag]} className="tag-logo" />
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ChampionCard
