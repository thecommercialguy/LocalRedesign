import { useState, useRef, useEffect } from 'react'
import { motion } from "framer-motion"
import BandPic from '../assets/band-pic.JPG'
import BandPic1 from '../assets/band-pic-1.JPG'
import BandPic2 from '../assets/band-pic-2.png'
import BandPic3 from '../carousel/black-and-white.jpeg'
import { usePageAnimation } from '../src/hooks/usePageAnimation'

export default function LiveMusic() {


    const gallery = [BandPic, BandPic1, BandPic2, BandPic3]

    const [currGallery, setCurrGallery] = useState(gallery[0])
    const [nextGallery, setNextGallery] = useState(gallery[1])

    const [isLoadedCurr, setIsLoadedCurr] = useState(false)
    const [isLoadedNext, setIsLoadedNext] = useState(false)
    // const [initialLoadComplete, setInitialLoadComplete] = useState(false)

    const galleryWindow = useRef()
    const onStage = useRef()
    
        
        function transition() {
            setIsLoadedNext(false)

            setCurrGallery((prev) => {
                const currIdx = gallery.indexOf(prev)
                const nextIdx = (currIdx + 1) % gallery.length
                return gallery[nextIdx]
            })
            setNextGallery((prev) => {
                const currIdx = gallery.indexOf(prev)
                const nextIdx = (currIdx + 1) % gallery.length
                return gallery[nextIdx]
            })
    
        }
    //     // setInterval(transition, 3000)
    //     console.log(onStage)
    //     onStage.current.addEventListener('animationend', () => transition)

    // }, [currGallery, nextGallery])

    const animation = usePageAnimation()

    return (
        <>
        <title>Live Music | 51st Street Speakeasy</title>
        <motion.div
            variants={animation}  // Essentially like the instructions
            initial="initial"
            animate="animate"
            exit="exit"
            transition={animation.transition}
            className="live-music-container"
        >
            <div className="live-music-section">
                <div ref={galleryWindow} className='image-container'>
                    {!isLoadedCurr && <div className="skelton-loader"></div>}
                    <img 
                        onAnimationEnd={transition} 
                        key={currGallery}
                        ref={onStage} 
                        // className={initialLoadComplete ? "currGallery" : ""}
                        className="currGallery" 
                        src={currGallery}
                        onLoad={()=>{
                            setIsLoadedCurr(true)
                            // setInitialLoadComplete(true)
                        }}
                        style={{ display: isLoadedCurr ? 'block' : 'none' }}
                        />
                    <img 
                        key={nextGallery} 
                        className="nextGallery" 
                        src={nextGallery}
                        onLoad={()=>{
                            console.log('Loaded')
                            setIsLoadedNext(true)
                        }}
                        style={{ display: isLoadedCurr ? 'block' : 'none' }}
                    />
                </div>
                
                <div className="live-music-info-container">

                    <h2>Tuesdays - Free Live Music</h2>
                    <ul>
                        <li>Burgers and Blues</li>
                        <li>All Burgers $5 All Day</li>
                        <li>7-10pm - No Cover</li>

                    </ul>
                    <h2>Wednesdays - Free Live Music</h2>
                    <ul>
                        <li>Burgers and Blues</li>
                        <li>All Burgers $5 All Day</li>
                        <li>7-10pm - No Cover</li>

                    </ul>
                    <h2>Thursdays - Free Live Music</h2>
                    <ul>
                        <li>Burgers and Blues</li>
                        <li>All Burgers $5 All Day</li>
                        <li>7-10pm - No Cover</li>

                    </ul>
                    <h2>Fridays and Saturdays - Live Music</h2>
                    <ul>
                        <li>Burgers and Blues</li>
                        <li>All Burgers $5 All Day</li>
                        <li>7-10pm - No Cover</li>

                    </ul>
                </div>

            </div>
        </motion.div>
        </>
    )
}