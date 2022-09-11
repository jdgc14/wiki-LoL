import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

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
            <h2>Champion Details</h2>
            <div className="my-5">
                <h3>{champion.name}</h3>
                <img src={imgUrl} alt="" />
            </div>
        </div>
    )
}

export default ChampionDetails
