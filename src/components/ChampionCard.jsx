import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/ChampionCard.css'

const ChampionCard = ({ champion }) => {
    const imgUrl =
        'https://ddragon.leagueoflegends.com/cdn/12.17.1/img/champion/'

    return (
        <div className="col-8 col-sm-6 col-md-4 col-lg-3 mx-auto my-3">
            <div className="p-1 border rounded bg-card link-pointer">
                <Link to={`/champion/${champion.id}`} className="link-champion">
                    <div>
                        <img src={imgUrl + champion.id + '.png'} />
                    </div>
                    <h3>{champion.name}</h3>
                    <small style={{ textTransform: 'capitalize' }}>
                        {champion.title}
                    </small>
                </Link>
            </div>
        </div>
    )
}

export default ChampionCard
