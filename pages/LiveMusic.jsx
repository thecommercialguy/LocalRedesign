import { useState, useRef, useEffect } from 'react'
import BandPic from '../assets/band-pic.JPG'
import BandPic1 from '../assets/band-pic-1.JPG'
import BandPic2 from '../assets/band-pic-2.png'

export default function LiveMusic() {


    const gallery = [BandPic, BandPic1, BandPic2]

    const [currGallery, setCurrGallery] = useState(gallery[0])
    const [nextGallery, setNextGallery] = useState(gallery[1])

    const galleryWindow = useRef()
    const onStage = useRef()
    
        
        function transition() {
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



    return (
        <div className="live-music-container">
            <div className="live-music-section">
                <div ref={galleryWindow} className='image-container'>
                    <img onAnimationEnd={transition} 
                        key={currGallery}
                        ref={onStage} 
                        className="currGallery" 
                        src={currGallery}/>
                    <img key={nextGallery} className="nextGallery" src={nextGallery}/>
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
        </div>

    )
}