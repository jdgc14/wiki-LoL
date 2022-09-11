import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ChampionCard from './ChampionCard'

const Home = () => {
    const URL =
        'https://ddragon.leagueoflegends.com/cdn/12.17.1/data/en_US/champion.json'

    const [champions, setChampions] = useState([])

    const readAllChampions = (url) => {
        axios.get(url).then((res) => setChampions(res.data.data))
    }

    useEffect(() => readAllChampions(URL), [])

    console.log(champions)
    return (
        <div className="">
            <h1>League of Legends Champions</h1>
            <div className="row">
                {Object.values(champions).map((champion) => (
                    <ChampionCard key={champion.id} champion={champion} />
                ))}
            </div>
        </div>
    )
}

export default Home
