import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
    filterChampionsByCategory,
    readAllChampionsThunk,
} from '../store/slices/champions.slice'

const FilterByCategory = () => {
    const dispatch = useDispatch()

    const categories = useSelector((state) => state.categoriesChampionsSlice)

    const changeCategory = (category) => {
        dispatch(filterChampionsByCategory(category))
    }

    return (
        <div className="row">
            <div>
                <button
                    onClick={() => dispatch(readAllChampionsThunk())}
                    className="link-button bg-white text-dark p-1 m-1 rounded"
                >
                    All
                </button>
                {categories.map((category) => (
                    <button
                        value={category}
                        onClick={(e) => changeCategory(e.target.value)}
                        key={category}
                        className={`text-capitalize link-button bg-${category.toLowerCase()} p-1 m-1 rounded`}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default FilterByCategory
