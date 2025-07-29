import instagramIcon from '../assets/Instagram.svg'
import facebookIcon from '../assets/Facebook.svg'
import { motion } from 'framer-motion'
import { useContext, useEffect } from 'react';
import { color, transform } from 'framer-motion';
import { ScreenWidthContext } from '../src/contexts/ScreenWidthContext';

const styles = {
    container: {
        display: 'flex',
        position: 'absolute',
        left: '50%',
        bottom: 5,
        transform: 'translateX(-50%)'
    },
    discalaimer: {
        fontSize: 10,
        opacity: '.9',
        color: 'white',
        textAlign: 'center'
    },
    discalaimerMobile: {
        fontSize: 8,
        textAlign: 'center',
        opacity: '.9',
        color: 'white'
    }
    
}

export default function Footer() {
    // 4125 51st St Oklahoma City, OK 73041
    const { windowWidth } = useContext(ScreenWidthContext)
    const isDesktop = windowWidth >= 1440

    useEffect(()=> {
                const setStaticVH = () => {
                    const vh = window.innerHeight * 0.01; // Calculate 1% of initial viewport height
                    console.log(vh)
                    
                    document.documentElement.style.setProperty('--vh', `${vh}px`);
                    }
        
                    setStaticVH()
                    // window.addEventListener('resize',setStaticVH)
            }, []);  
    return (
        <footer className="footer">
            <nav className="social-links" aria-label="Social Media Links">
                <ul className="social-list">
                    <li>
                        <a className="social-link" href='https://www.instagram.com/the_speak/'></a>
                        <motion.img 
                            whileHover={{ scale: 1.05}}
                            whileTap={{ scale: 0.9 }}
                            className="social-icon"
                            src={instagramIcon}
                            alt="Instagram Icon"
                        />
                    </li>
                    <li>
                        <a className="social-link" href='https://www.facebook.com/profile.php?id=100063713253793'></a>
                        <motion.img 
                            whileHover={{ scale: 1.05}}
                            whileTap={{ scale: 0.9 }}
                            className="social-icon"
                            src={facebookIcon}
                            alt="Facebook Icon"
                        />
                    </li>
                </ul>
            </nav>
            <address>
                <span>1114 NW 51st St Oklahoma City, OK 73041 <i>•</i> thespeak@yahoo.com <i>•</i> +1 (405) 463-0470 </span>
            </address>
            <div style={styles.container}>
                <i style={isDesktop ? styles.discalaimer : styles.discalaimerMobile}>This is a conceptual website redesign created for portfolio purposes only. It is not affiliated with the 51st Speakeasy.</i>
            </div>
        </footer>
    )
}