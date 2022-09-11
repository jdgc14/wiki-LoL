import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../styles/ChampionDetails.css'
import { useParams } from 'react-router-dom'
import AbilitiesChampion from './AbilitiesChampion'
import PassiveChampion from './PassiveChampion'

const ChampionDetails = () => {
    const { id } = useParams()

    const championUrl = `https://ddragon.leagueoflegends.com/cdn/12.17.1/data/en_US/champion/${id}.json`

    const imgUrl = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${id}_0.jpg`

    const [champion, setChampion] = useState({})

    const readChampion = () => {
        axios.get(championUrl).then((res) => setChampion(res.data.data[id]))
    }

    useEffect(readChampion, [])

    console.log(champion)

    return (
        <div className="container">
            {/* <h2>Champion Details</h2> */}
            <div className="py-3">
                <h6 className="text-capitalize m-0">{champion.title}</h6>
                <h1 className="text-uppercase fw-bold fst-italic">
                    {champion.name}
                </h1>
                <div className="bg-text border rounded p-3">
                    <small>{champion.lore}</small>
                </div>
                <div className="col-8 col-sm-6 col-md-4 col-lg-2 mx-auto py-3">
                    <img src={imgUrl} className="img-champion" />
                </div>
                <div className="bg-text border rounded">
                    <AbilitiesChampion spells={champion.spells} />
                    <PassiveChampion passive={champion.passive} />
                </div>
            </div>
        </div>
    )
}

export default ChampionDetails
