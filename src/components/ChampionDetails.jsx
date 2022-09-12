import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../styles/ChampionDetails.css'
import imgs from '../assets/imgs'
import { useNavigate, useParams } from 'react-router-dom'
import AbilitiesChampion from './AbilitiesChampion'
import PassiveChampion from './PassiveChampion'
import SkinsChampion from './SkinsChampion'
import { useDispatch, useSelector } from 'react-redux'
import { filterChampionsByCategory } from '../store/slices/champions.slice'
import {
    addFavorite,
    deleteFavorite,
} from '../store/slices/championsFavorites.slice'

const ChampionDetails = () => {
    const { id } = useParams()

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const [isFavorite, setIsFavorite] = useState(false)

    const championsFavorites = useSelector(
        (state) => state.championsFavoritesSlice
    )

    const [champion, setChampion] = useState({})

    const isOrNotFavorite = () => {
        if (
            championsFavorites.find(
                (championFavorite) => championFavorite.id === id
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
    const readChampion = () => {
        axios
            .get(championUrl)
            .then((res) => setChampion(res.data.data[id]))
            .finally(setTimeout(() => setIsLoading(false), 1000))
    }

    useEffect(readChampion, [])

    useEffect(isOrNotFavorite, [championsFavorites])

    const championUrl = `https://ddragon.leagueoflegends.com/cdn/12.17.1/data/en_US/champion/${id}.json`

    const imgUrl = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${id}_0.jpg`

    const [isLoading, setIsLoading] = useState(true)

    const changeCategory = (category) => {
        dispatch(filterChampionsByCategory(category))
        navigate('/')
    }

    return (
        <>
            {isLoading ? (
                <div className="spinner-border" role="status">
                    <span className="visually-hidden"></span>
                </div>
            ) : (
                <div className="container">
                    {/* <h2>Champion Details</h2> */}
                    <div className="py-3 position-relative">
                        <h6 className="text-capitalize m-0 text-secondary">
                            {champion.title}
                        </h6>
                        <h1 className="text-uppercase fw-bold fst-italic">
                            {champion.name}
                        </h1>
                        <div
                            className="position-absolute text-warning"
                            style={{
                                right: '10px',
                                top: '5px',
                                cursor: 'pointer',
                            }}
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
                        <div className="bg-text border rounded p-3">
                            <small>{champion.lore}</small>
                        </div>
                        <div className="col-8 col-sm-6 col-md-4 col-lg-2 mx-auto py-3">
                            <img src={imgUrl} className="img-champion" />
                        </div>
                        <div className="d-flex justify-content-center gap-3 my-4">
                            {champion.tags.map((tag) => (
                                <button
                                    key={tag}
                                    onClick={() => changeCategory(tag)}
                                    className={`bg-${tag.toLowerCase()} rounded border col-3 fw-bold tag-champion d-flex`}
                                >
                                    <small className="position-absolute tag-text">
                                        {tag}
                                    </small>
                                    <div
                                        className={`bg-${tag.toLowerCase()} tag-transition col-12`}
                                    >
                                        <img
                                            src={imgs[tag]}
                                            className="tag-logo"
                                        />
                                    </div>
                                </button>
                            ))}
                        </div>
                        <div className="bg-text border rounded">
                            <AbilitiesChampion spells={champion.spells} />
                            <PassiveChampion passive={champion.passive} />
                            <SkinsChampion
                                nameChampion={champion.id}
                                skins={champion.skins}
                            />
                        </div>
                        {/* <i class="fa-solid fa-shield"></i> */}
                    </div>
                </div>
            )}
        </>
    )
}

export default ChampionDetails
