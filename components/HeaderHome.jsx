import logo from '../assets/51st-Speakeay-logo.png'
// import '../src/Header.css'
import { Link } from 'react-router-dom'

export default function HeaderHome(props) {
    // console.log(props.scrolled)

    return (
        <header className={!props.scrolled ? "header home" : "header home scrolled"}>
            <nav className="header-nav">
                <Link className="home-link" to="/"><img className="header-logo"src={logo} alt="51st Speakeasy logo" /></Link>
                <ul className="nav-links">
                    <li><Link className="nav-link" to="/eats">Eats</Link></li>
                    <li><Link className="nav-link" to="/live-music">Live Music</Link></li>
                    <li><Link className="nav-link" to="/bottles-and-cans">Bottles and Cans</Link></li>
                </ul>
            </nav>
        </header>
    )
}