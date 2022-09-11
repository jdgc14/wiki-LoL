import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import ChampionDetails from './components/ChampionDetails'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
    return (
        <div className="App bg-dark text-light text-center">
            <HashRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/champion/:id" element={<ChampionDetails />} />
                </Routes>
                <Footer />
            </HashRouter>
        </div>
    )
}

export default App
