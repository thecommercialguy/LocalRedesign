import logo from '../assets/51st-Speakeay-logo.webp'
// import '../src/Header.css'
import { Link } from 'react-router-dom'
import MenuIcon from './MenuIcon.jsx'
import { useContext, useState } from 'react'
import { ClickContext } from '../src/contexts/ClickContext.js'
import { ScreenWidthContext } from '../src/contexts/ScreenWidthContext.js'


export default function HeaderHome(props) {
    const {clicked, setClicked} = useContext(ClickContext)
    const { windowWidth } = useContext(ScreenWidthContext)
    const notDesktop = windowWidth < 1140
    // function handleClick(clicked) {
    //     return !clicked

    // }

    return (
        <header className={!props.scrolled ? "header home" : "header home scrolled"}>
            <nav className="header-nav">

                <Link onClick={()=> {
                    notDesktop ?
                    setClicked(!clicked) :
                    ''
                }} className="home-link" to="/"><img className="header-logo"src={logo} alt="51st Speakeasy logo" /></Link>
                {notDesktop ? 
                    <MenuIcon />
                    // <MenuIcon handleClick={handleClick} />
                :
                <ul className="nav-links">
                    <li><Link className="nav-link" to="/eats">Eats</Link></li>
                    <li><Link className="nav-link" to="/live-music">Live Music</Link></li>
                    <li><Link className="nav-link" to="/bottles-and-cans">Bottles and Cans</Link></li>
                </ul>}
            </nav>
        </header>
    )
}

// clicked={clicked}