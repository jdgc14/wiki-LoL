import React from 'react'

const SkinsChampion = ({ nameChampion, skins }) => {
    const urlSkinImg = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${nameChampion}_`

    return (
        <div className="py-3">
            <h4 className="fw-bold text-info">Skins</h4>
            <div className="scroll p-4">
                {skins
                    ?.filter((skin) => skin.name !== 'default')
                    .map((skin) => (
                        <div
                            key={skin.id}
                            className="col-8 col-sm-6 col-md-4 col-lg-3 mx-4"
                        >
                            <small className="text-nowrap">{skin.name}</small>
                            <div className="mt-2">
                                <img
                                    src={urlSkinImg + `${skin.num}.jpg`}
                                    className="skin-img"
                                />
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default SkinsChampion
