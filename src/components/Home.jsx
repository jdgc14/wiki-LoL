import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ChampionCard from './ChampionCard'

const Home = () => {
    const URL =
        'https://ddragon.leagueoflegends.com/cdn/12.17.1/data/en_US/champion.json'

    const [champions, setChampions] = useState([])

    const [isLoading, setIsLoading] = useState(true)

    const readAllChampions = (url) => {
        axios
            .get(url)
            .then((res) => setChampions(res.data.data))
            .then(() => setIsLoading(false))
    }

    useEffect(() => readAllChampions(URL), [])

    console.log(champions)
    return (
        <>
            {isLoading ? (
                <div className="spinner-border" role="status">
                    <span className="visually-hidden"></span>
                </div>
            ) : (
                <div className="">
                    {/* <h1>Champions</h1> */}
                    <div className="col-11 mx-auto">
                        <div className="row">
                            {Object.values(champions).map((champion) => (
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
