import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { filterChampionsByCategory } from '../store/slices/champions.slice'
import '../styles/ChampionCard.css'

const ChampionCard = ({ champion }) => {
    const dispatch = useDispatch()

    const imgUrl =
        'https://ddragon.leagueoflegends.com/cdn/12.17.1/img/champion/'

    const changeCategory = (category) => {
        dispatch(filterChampionsByCategory(category))
    }

    return (
        <div className="col-8 col-sm-6 col-md-4 col-lg-3 mx-auto my-3">
            <div className="p-3 border rounded bg-card">
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
                    <h3>{champion.name}</h3>
                </Link>
                <div className="d-flex justify-content-center gap-3">
                    {champion.tags.map((tag) => (
                        <button
                            key={tag}
                            value={tag}
                            onClick={(e) => changeCategory(e.target.innerText)}
                            className={`bg-${tag.toLowerCase()} rounded col-5 col-lg-4 fw-bold tag-champion`}
                        >
                            <small value={tag}>{tag}</small>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ChampionCard
