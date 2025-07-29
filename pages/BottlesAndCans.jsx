import { useContext, useState } from 'react'
import DrinkMenu from '../assets/drink-menu.JPG'
import { usePageAnimation } from '../src/hooks/usePageAnimation'
import { motion, AnimatePresence } from "framer-motion"
import { ScreenWidthContext } from '../src/contexts/ScreenWidthContext'

const styles = {
    container: {

    }
}

export default function BottlesAndCans() {
    const [isLoaded, setIsLoaded] = useState(false)
    const [isTapped, setIsTapped] = useState(false)
    const { windowWidth } = useContext(ScreenWidthContext)
    const isMobile = windowWidth < 810
    const animation = usePageAnimation()

    const handleTap = () => {
        // Only allow tapping on mobile devices
        if (isMobile) {
            setIsTapped(!isTapped);
        }
    }


    return (
        <motion.div
            variants={animation}  // Essentially like the instructions
            initial="initial"
            animate="animate"
            exit="exit"
            transition={animation.transition}
            className="bottles-and-drinks-container"
        >
            <motion.div
                onTap={handleTap} 
                className={`image-container ${isTapped && isMobile ? 'tapped' : ''}`}
                layout 
            >
                {!isLoaded && <div className="skelton-loader drinks"></div>}

                <img
                    onLoad={()=>{setIsLoaded(true)}}
                    src={DrinkMenu} 
                    alt="Drink menu"
                    style={{display: isLoaded ? 'block' : 'none'}}
                />

            </motion.div>

            <AnimatePresence>
                {isTapped && isMobile && (
                    <motion.div
                        className="backdrop"
                        onClick={() => setIsTapped(false)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />
                )}
            </AnimatePresence>
        </motion.div>
    )
}