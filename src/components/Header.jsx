import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/league-of-legends.png'
import '../styles/Header.css'

const Header = () => {
    const navigate = useNavigate()

    const goToHome = () => {
        navigate('/')
    }

    return (
        <div className="">
            <div className="col-10 col-md-4 m-auto">
                <img src={logo} className="logo" onClick={goToHome} />
            </div>
            <div
                className="position-absolute"
                style={{
                    right: '5%',
                    top: '15px',
                }}
            >
                <button onClick={goToHome} className="btn btn-link">
                    <i className="fa-solid fa-house button-home"></i>
                </button>
            </div>
        </div>
    )
}

export default Header
