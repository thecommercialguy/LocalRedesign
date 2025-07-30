import {useEffect, useRef, useState} from 'react'
// import hero from '../assets/hero-img.png'
import hero from '../src/assets/hero/hero-img.jpg'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { motion } from 'framer-motion'
// import { getPageAnimation } from '../src/animations'
import { usePageAnimation } from '../src/hooks/usePageAnimation'
import { mobileAnimation } from '../src/animations'
// import Swiper from 'swiper'
// // import contacts from '../assets/contacts-img.png'
// '../carousel/caro-img-1.jpeg'
// '../src/assets/hero/frank-mugshot.webp'
// // import bugsyMugshot from '../carousel/busgy-mugshot.png'
// // import bowieMugshot from '../carousel/david-bowie-mugshot.png'
// '../src/assets/hero/hendrix-mugshot.webp'
// // import friends from '../carousel/caro-img.png'
// '../carousel/caro-img-3.jpeg'
// // import performer from '../carousel/caro-img-2.png'
// '../src/assets/hero/tennis.webp'
// // import stage from '../assets/band-pic.JPG'
// '../src/assets/hero/band-pic-small.png'
// '../assets/band-pic-2.png'


export default function Main() {
    const [carouselImgs, setCarouselImgs] = useState([
        { src: '/carousel/band-pic-small.png', alt: 'An image of the 51st Speakeasy stage' }, 
        { src: '/carousel/frank-mugshot.webp', alt: 'A mugshot of Frank Sinatra' }, 
        { src: '/carousel/caro-img-1.jpeg', alt: 'A 51st Speakeast visitor holding floral arrangement' }, 
        { src: '/carousel/band-pic-2.png', alt: 'A band performing on stage' }, 
        { src: '/carousel/tennis.webp', alt: '51st Speakeasy visitors taking a selfie at the foosball table' }, 
        { src: '/carousel/hendrix-mugshot.webp', alt: 'A mugshot of Jimi Hendrix' }, 
        { src: '/carousel/caro-img-3.jpeg', alt: 'A pool table' }

    ])
    // const [carouselImgs, setCarouselImgs] = useState([stage, frankMugshot, flowers, performers, tennis, hendrixMugshot, poolTable])
    // const loopedCarouselImgs = [...carouselImgs, ...carouselImgs]
    const [scrollStateH, setScrollStateH] = useState(false)

    const [swiper, setSwiper] = useState(null)  // Fix to autoplay issue

    const heroEl = useRef()
    const swiperRef= useRef(null)


    useEffect(() => {
        // Initallized
        if (swiper) {
            // Manual start
            const timeoutId = setTimeout(() => {
                // swiper.update()


                swiper.autoplay.start()
            }, 100)

            return () => clearTimeout(timeoutId)
        }
    }, [swiper]) 

    useEffect(()=>{
        // console.log(heroEl)
        const handleScroll = () => {

        // Could pass the header height in as a prop....
        const heroElProperties = heroEl.current.getBoundingClientRect()
        setScrollStateH(120 > (heroElProperties.y + (heroElProperties.height / 2) ))

    }


    window.addEventListener('scroll', handleScroll)

    return () => {
        window.removeEventListener('scroll', handleScroll)
    }


    }, [])

    useEffect(()=> {
        const setStaticVH = () => {
            const vh = window.innerHeight * 0.01; // Calculate 1% of initial viewport height
            console.log(vh)
            
            document.documentElement.style.setProperty('--vh', `${vh}px`);
            }

            setStaticVH()
            // window.addEventListener('resize',setStaticVH)
    }, [])

    const carouselItems = carouselImgs.map((imgObj, idx) => (
        <SwiperSlide key={idx} className='carousel-item'>
            <div className='overlay'></div>
            <img
                className='carousel-img'
                src={imgObj.src}
                alt={imgObj.alt}
                loading="eager"
            />
        </SwiperSlide>
    ))

    // const { windowWidth } = useContext(ScreenWidthContext)
    // const notDesktop = windowWidth < 1140

    // const animation = usePageAnimation()
    const animation = mobileAnimation


    
    return (
        <>
        <title>Home | 51st Street Speakesy</title>
        <motion.main
            variants={animation}  // Essentially like the instructions
            initial="initial"
            animate="animate"
            exit="exit"
            transition={animation.transition}

        >
            <section className="hero">
                <div className="image-container">
                    <img src={hero} alt="51st Street Speakeasy Bar Area" />
                </div>
                <div ref={heroEl} className={scrollStateH ? "hero-headers scrolled": "hero-headers"}>
                    <h1>YOUR NEW FAVORITE SPOT</h1>
                    <h2>Eats <i>•</i> Drinks <i>•</i> Live Music</h2>
                </div>
            </section>

            <section className="description">
                <p>Enjoy an eclectic experince with a variety of vibes. Jazz, Rock, Electronic 
                    and much more. Enjoy bottles and cans local and domestic. Come visit one of 
                    OKC’s most unique spots.</p>
            </section>

            <section className="contact-location-details">
                    {/* <img src={contacts} alt="51st Speakeasy Stage Area" /> */}
                    <Swiper
                        modules={[Autoplay]}
                        className="carousel-container"
                        spaceBetween={10}
                        slidesPerView={'auto'}
                        loop={true}
                        centeredSlides={true}
                        initialSlide={0}
                        speed={6000}
                        // onSwiper={(swiper)=> swiperRef.current = swiper}
                        // onTouchEnd={() => {
                        //     if (swiperRef.current) {
                        //         swiperRef.current.slideReset(3000)
                        //     }
                        // }}
                        onSwiper={(swiper) => {setSwiper(swiper)}}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: false
                        }}
                        onM
                        // noSwiping={true}
                        // parallax={true}
                        // oneWayMovement={true}
                        // zoom
                    >
                        {carouselItems}
                        
                    </Swiper>
                    {/* <div className="carousel-container"> */}
                        {/* {carouselItems} */}
                    

                    
                <address className="location">

                    <div className="contact-info">
                        <span className="visit-span">Visit <span className="speak-span">The Speak</span>:</span>
                        <p>1114 NW 51st St Oklahoma City, OK 73041</p>
                    </div>

                    <div className="contact-info">
                        <span>Contact us:</span>
                        <p className='last'>+1 (405) 463-0470 </p> 
                    </div>

                </address>
            </section>



        </motion.main>
        </>
    )
}
// console.log(window.getComputedStyle(test.current).marginRight)
// console.log(window.getComputedStyle(test.current).marginLeft)
// console.log(window.getComputedStyle(test.current).borderInlineEndWidth)
// console.log(window.getComputedStyle(test.current).borderInlineStartWidth)
// console.log(window.getComputedStyle(test.current).width)

// const testList = test1.current.querySelectorAll('.carousel-item')
// let v = 0
// testList.forEach(el => {
//     v += parseFloat(window.getComputedStyle(el).marginRight)
//     v += parseFloat(window.getComputedStyle(el).marginLeft)
//     v += parseFloat(window.getComputedStyle(el).borderInlineEndWidth)
//     v += parseFloat(window.getComputedStyle(el).borderInlineStartWidth)
//     v += parseFloat(window.getComputedStyle(el).width)
// });

// console.log(v)
// console.log(test.current.style.margin)