import { useState } from 'react'
import DrinkMenu from '../assets/drink-menu.JPG'
import { usePageAnimation } from '../src/hooks/usePageAnimation'
import { motion } from "framer-motion"

export default function BottlesAndCans() {
    const [isLoaded, setIsLoaded] = useState(false)
    const animation = usePageAnimation()

    return (
        <motion.div
            variants={animation}  // Essentially like the instructions
            initial="initial"
            animate="animate"
            exit="exit"
            transition={animation.transition}
            className="bottles-and-drinks-container"
        >
            <div className="image-container">
                {!isLoaded && <div className="skelton-loader drinks"></div>}

                <img
                    onLoad={()=>{setIsLoaded(true)}}
                    src={DrinkMenu} 
                    alt="Drink menu"
                />

            </div>
        </motion.div>
    )
}