import { useContext, useEffect, useRef, useState } from "react"
import { Link, NavLink, useNavigate } from 'react-router-dom'
// import { motion } from "framer-motion"
// import logo  from '../assets/51st-Speakeay-logo.png'
import instagramIcon from '../assets/Instagram.svg'
import facebookIcon from '../assets/Facebook.svg'
import { ClickContext } from "../src/contexts/ClickContext"
import { ScreenWidthContext } from "../src/contexts/ScreenWidthContext"
import { AnimatePresence , motion } from "framer-motion"
// import { use}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        width: 'max-content',
        height: 40,

        cursor: 'pointer',
        zIndex: 10
        
        
    },
    containerMobile: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        width: 'max-content',
        height: 30,

        cursor: 'pointer',
        zIndex: 10
        
        
    },
    bar: {
        width: 50,
        height: 3,
        backgroundColor: 'white',
        // marginBlockEnd: '12px',
        borderRadius: '28px',
        transition: 'transform 150ms ease-in-out',
        transform: 'translateY(0) rotate(0)',
        // transformOrigin: 'center' // <-- add this line

    },
    barMobile: {
        width: 40,
        height: 2,
        backgroundColor: 'white',
        // marginBlockEnd: '12px',
        borderRadius: '28px',
        transition: 'transform 150ms ease-in-out',
        transform: 'translateY(0) rotate(0)',
        // transformOrigin: 'center' // <-- add this line

    },
    barMid: {
        backgroundColor: 'transparent',
        height: '12px'
    },
    barLast: {
        width: 50,
        height: 3,
        backgroundColor: 'white',
        borderRadius: '28px',
        marginTop: '8px',
        transition: 'transform 150ms ease-in-out',
        transform: 'translateY(0) rotate(0)',
        // transformOrigin: 'center' // <-- add this line

    },
    barLastMobile: {
        width: 40,
        height: 2,
        backgroundColor: 'white',
        borderRadius: '28px',
        marginTop: '8px',
        transition: 'transform 150ms ease-in-out',
        transform: 'translateY(0) rotate(0)',
        // transformOrigin: 'center' // <-- add this line

    },
    barMidClicked: {
        display: 'none'
    },
    barClicked: {
        width: 50,
        height: 3,
        backgroundColor: 'white',
        borderRadius: '28px',
        transition: 'transform 150ms ease-in-out',
        transform: ' translate(0) rotate(-45deg)',
    },
    barLastClicked: {
        width: 50,
        height: 3,
        backgroundColor: 'white',
        borderRadius: '28px',
        transition: 'transform 150ms ease-in-out',
        transform: 'translate(0, -3px) rotate(45deg)',
    },
    barClickedMobile: {
        width: 40,
        height: 2,
        backgroundColor: 'white',
        borderRadius: '28px',
        transition: 'transform 150ms ease-in-out',
        transform: ' translate(0) rotate(-45deg)',
    },
    barLastClickedMobile: {
        width: 40,
        height: 2,
        backgroundColor: 'white',
        borderRadius: '28px',
        transition: 'transform 150ms ease-in-out',
        transform: 'translate(0, -3px) rotate(45deg)',
    }
}

const menuVariants = {
  initial: {
    opacity: 0,
    // y: "200%" // Start off-screen above
  },
  animate: {
    opacity: 1,
    // y: "0%", // Animate to its natural position
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1] // A nice easing curve
    }
  },
  exit: {
    opacity: 0,
    // y: "-200", // Animate out by moving up
    transition: {
      duration: 0.45,
      ease: [0.4, 0, 0.2, 1]
    }
  }
}

const navVariants = {
  initial: {
    opacity: 0,
    y: "200%" // Start off-screen above
  },
  animate: {
    opacity: 1,
    y: "0%", // Animate to its natural position
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1], // A nice easing curve
    //   y: { type: "spring", stiffness: 500, damping: 1000 }
    }
  },
  exit: {
    opacity: 0,
    y: "150%", // Animate out by moving up
    transition: {
      duration: 0.45,
      ease: [0.4, 0, 0.2, 1]
    }
  }
}

export default function MenuIcon(props) {
    // const [clicked, setClicked] = useState(false)
    // console.log(ClickContext)
    const {clicked, setClicked } = useContext(ClickContext)
    const { windowWidth } = useContext(ScreenWidthContext)
    const navigate = useNavigate();
    const [menuBars, setMenuBars] = useState({
        container: styles.container,
        topBar: styles.bar,
        bottomBar: styles.barLast,
        topBarClicked: styles.barClicked,
        bottomBarClicked: styles.barLastClicked
    })
    const [isMounted, setIsMounted] = useState(false)

    // const handleDelayedNavigate = (e, to) => {
    //     // 1. Prevent the NavLink from navigating immediately
    //     e.preventDefault();

    //     // 2. Trigger the exit animation by setting state
    //     setClicked(false);

    //     // 3. Wait for the animation to finish, then navigate
    //     // This timeout duration MUST match your animation duration (300ms)
    //     setTimeout(() => {
    //         navigate(to);
    //     }, 290);
    // };

    const mobile = windowWidth < 810
    
    console.log(mobile)

    const topMenuBar = useRef(null)
    // const topMenuBar = useRef(null)

    useEffect(() => {
        
        mobile ? setMenuBars({
            container: styles.containerMobile,
            topBar: styles.barMobile,
            bottomBar: styles.barLastMobile,
            topBarClicked: styles.barClickedMobile,
            bottomBarClicked: styles.barLastClickedMobile
        }) : setMenuBars({
            container: styles.container,
            topBar: styles.bar,
            bottomBar: styles.barLast,
            topBarClicked: styles.barClicked,
            bottomBarClicked: styles.barLastClicked
        })
        
        

        // window.addEventListener('resize', changeBars)
    }, [mobile])

    // useEffect(() => {
    //     if (clicked) {
    //         setIsMounted(true)
    //          console.log('P')
    //     } else {
    //         const timer = setTimeout(() => {
    //             setIsMounted(false)
    //         }, 290)
            
    //         return () => clearTimeout(timer)
    //     }
    //     // console.log('Ran')

    // }, [clicked])

    // function handleClick() {

    //     setClicked(!clicked)
    //     if (clicked === false) {

    //     }
    // }

    

    // event listener for event end displaying menu
    
    return (
        <>
            <div onClick={() => setClicked(!clicked)} style={menuBars.container} className="menu-icon-container">
                <div ref={topMenuBar} style={clicked ? menuBars.topBarClicked : menuBars.topBar} className="bar-1"></div>
                <div style={clicked ? menuBars.bottomBarClicked : menuBars.bottomBar} className="bar-2"></div>

            </div>
            {/* <div onClick={() => setClicked(!clicked)} style={styles.container} className="menu-icon-container">
                <div ref={topMenuBar} style={clicked ? styles.barClicked : styles.bar} className="bar-1"></div>
                <div style={clicked ? styles.barLastClicked : styles.barLast} className="bar-2"></div>

            </div> */}
            <AnimatePresence propagate>
            {clicked && 
                <motion.div 
                    variants={menuVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="menu-overlay"
                >
                    {/* <Link className="home-link" to="/"><img className="header-logo"src={logo} alt="51st Speakeasy logo" /></Link> */}
                    
                    <ul className="nav-links">
                        <motion.li 
                        variants={navVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="nav-item">
                            <NavLink
                                // onClick={(e) => handleDelayedNavigate(e, '/eats')} 
                                onClick={() => setClicked(false)} 
                                className={({isActive})=> (isActive ? 'nav-link isActive' : 'nav-link')}
                                to="/eats">
                                Eats
                            </NavLink>
                        </motion.li>
                        <motion.li 
                        variants={navVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="nav-item">
                            <NavLink
                                // onClick={(e) => handleDelayedNavigate(e, '/live-music')}
                                onClick={() => setClicked(false)} 
                                className={({isActive})=> (isActive ? 'nav-link isActive' : 'nav-link')}
                                to="/live-music">
                                Live Music
                            </NavLink>
                        </motion.li>
                        <motion.li 
                        variants={navVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="nav-item">
                            <NavLink
                                // onClick={(e) => handleDelayedNavigate(e, '/bottles-and-cans')}
                                onClick={() => setClicked(false)} 
                                className={({isActive})=> (isActive ? 'nav-link isActive' : 'nav-link')}
                                to="/bottles-and-cans">
                                Bottles and Cans
                            </NavLink>
                        </motion.li>
                        {/* <li className="nav-item"><NavLink className="nav-link" to="/eats">Eats</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/live-music">Live Music</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/bottles-and-cans">Bottles and Cans</NavLink></li> */}
                    </ul>

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
                </motion.div>}
            </AnimatePresence>
        </>
        
        
    )
}