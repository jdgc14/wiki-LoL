import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { readAllChampionsThunk } from '../store/slices/champions.slice'
import ChampionCard from './ChampionCard'
import FilterByCategory from './FilterByCategory'

const Home = () => {
    const dispatch = useDispatch()

    const champions = useSelector((state) => state.championsSlice)

    const isLoading = useSelector((state) => state.isLoading)

    const [page, setPage] = useState(1)

    const itemsPerPage = 12

    const lastIndex = page * itemsPerPage

    const firstIndex = lastIndex - itemsPerPage

    const numberOfChampions = champions?.length

    const lastPage = Math.ceil(numberOfChampions / itemsPerPage)

    const championsPaginated = champions?.slice(firstIndex, lastIndex)

    const nextPage = () => {
        setPage(page + 1)
    }

    const prevPage = () => {
        setPage(page - 1)
    }

    useEffect(() => {
        dispatch(readAllChampionsThunk())
    }, [])
    return (
        <>
            {isLoading ? (
                <div className="spinner-border" role="status">
                    <span className="visually-hidden"></span>
                </div>
            ) : (
                <div className="">
                    <FilterByCategory />
                    <div className="col-10 mx-auto">
                        <div className="row">
                            {championsPaginated?.map((champion) => (
                                <ChampionCard
                                    key={champion.id}
                                    champion={champion}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="d-flex justify-content-center gap-5">
                        {page !== 1 && (
                            <button
                                onClick={prevPage}
                                className="btn bg-primary bg-gradient border border-1 rounded fw-bold"
                            >
                                Prev
                            </button>
                        )}
                        {page !== lastPage && (
                            <button
                                onClick={nextPage}
                                className="btn bg-primary bg-gradient border border-1 rounded fw-bold"
                            >
                                Next
                            </button>
                        )}
                    </div>
                </div>
            )}
        </>
    )
}

export default Home
