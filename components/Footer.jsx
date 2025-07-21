import instagramIcon from '../assets/Instagram.svg'
import facebookIcon from '../assets/Facebook.svg'


export default function Footer() {
    // 4125 51st St Oklahoma City, OK 73041
    return (
        <footer className="footer">
            <nav className="social-links" aria-label="Social Media Links">
                <ul className="social-list">
                    <li>
                        <a className="social-link"></a>
                        <img className="social-icon"
                            src={instagramIcon}
                            alt="Instagram Icon"
                        />
                    </li>
                    <li>
                        <a className="social-link"></a>
                        <img className="social-icon"
                            src={facebookIcon}
                            alt="Facebook Icon"
                        />
                    </li>
                </ul>
            </nav>
            <address>
                <span>1114 NW 51st St Oklahoma City, OK 73041 <i>•</i> thespeak@yahoo.com <i>•</i> +1 (405) 463-0470 </span>
            </address>
        </footer>
    )
}