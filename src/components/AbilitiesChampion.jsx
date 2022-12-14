import React from 'react'

const AbilitiesChampion = ({ spells }) => {
    const urlAbilityImg =
        'https://ddragon.leagueoflegends.com/cdn/12.17.1/img/spell/'

    return (
        <div className="py-3">
            <h4 className="fw-bold text-info">Abilities</h4>
            <div className="scroll">
                {spells?.map((spell) => (
                    <div
                        key={spell.id}
                        className="col-6 col-md-4 border-start border-bottom border-top p-2"
                    >
                        <h6>{spell.name}</h6>
                        <div className="">
                            <img src={urlAbilityImg + `${spell.id}.png`} />
                        </div>
                        <small>{spell.description}</small>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AbilitiesChampion
