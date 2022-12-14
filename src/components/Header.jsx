import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/league-of-legends.png'
import '../styles/Header.css'

const Header = () => {
    const navigate = useNavigate()

    const goToHome = () => {
        navigate('/')
    }

    const goToFavorites = () => {
        navigate('/favorites')
    }

    return (
        <div className="">
            <div className="col-10 col-md-4 m-auto">
                <img src={logo} className="logo" onClick={goToHome} />
            </div>
            <div
                className="position-fixed d-flex flex-column gap-3"
                style={{
                    right: '5%',
                    top: '65px',
                    zIndex: '1',
                }}
            >
                <button onClick={goToHome} className="btn btn-link p-0">
                    <i className="fa-solid fa-house button-home"></i>
                </button>
                <button onClick={goToFavorites} className="btn btn-link p-0">
                    <i className="fa-solid fa-star button-home"></i>
                </button>
            </div>
        </div>
    )
}

export default Header
