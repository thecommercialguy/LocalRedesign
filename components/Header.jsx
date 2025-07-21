import logo from '../assets/51st-Speakeay-logo.png'
// import '../src/Header.css'
import { Link, NavLink } from 'react-router-dom'

export default function Header(props) {
    console.log(props.scrolled)
    
    return (
        <header className="header">
            <nav className="header-nav">
                <Link className="home-link" to="/"><img className="header-logo"src={logo} alt="51st Speakeasy logo" /></Link>
                <ul className="nav-links">
                    <li>
                        <NavLink 
                            className={({isActive})=> (isActive ? 'nav-link isActive' : 'nav-link')}
                            to="/eats">
                            Eats
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            className={({isActive})=> (isActive ? 'nav-link isActive' : 'nav-link')}
                            to="/live-music">
                            Live Music
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            className={({isActive})=> (isActive ? 'nav-link isActive' : 'nav-link')}
                            to="/bottles-and-cans">
                            Bottles and Cans
                        </NavLink>
                    </li>
                  
                </ul>
            </nav>
        </header>
    )
}