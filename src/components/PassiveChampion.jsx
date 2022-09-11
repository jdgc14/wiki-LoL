import React from 'react'
// import '../styles/ChampionDetails.css'

const PassiveChampion = ({ passive }) => {
    const urlPassiveChampion =
        'https://ddragon.leagueoflegends.com/cdn/12.17.1/img/passive/'

    return (
        <div className="pb-3">
            <h4>Passive</h4>
            <small>{passive?.name}</small>
            <div className="">
                <img src={urlPassiveChampion + passive?.image.full} alt="" />
            </div>
            <small>{passive?.description}</small>
        </div>
    )
}

export default PassiveChampion
