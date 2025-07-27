import {useEffect, useRef, useState} from 'react'
// import hero from '../assets/hero-img.png'
import hero from '../src/assets/hero/hero-img.jpg'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
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
        '/carousel/band-pic-small.png', 
        '/carousel/frank-mugshot.webp', 
        '/carousel/caro-img-1.jpeg', 
        '/carousel/band-pic-2.png', 
        '/carousel/tennis.webp', 
        '/carousel/hendrix-mugshot.webp', 
        '/carousel/caro-img-3.jpeg'
        // '/carousel/band-pic-small.png', 
        // '/carousel/frank-mugshot.webp', 
        // '/carousel/caro-img-1.jpeg', 
        // '/carousel/band-pic-2.png', 
        // '/carousel/tennis.webp', 
        // '/carousel/hendrix-mugshot.webp', 
        // '/carousel/caro-img-3.jpeg'
    ])
    // const [carouselImgs, setCarouselImgs] = useState([stage, frankMugshot, flowers, performers, tennis, hendrixMugshot, poolTable])

    const [scrollStateH, setScrollStateH] = useState(false)

    const heroEl = useRef()
    const swiperRef= useRef(null)

    useEffect(()=>{
        // console.log(heroEl)
        const setStaticVH = () => {
        const vh = window.innerHeight * 0.01; // Calculate 1% of initial viewport height
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        }
        setStaticVH()
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

    const carouselItems = carouselImgs.map((imgScr, idx) => (
        <div key={idx} className='carousel-item'>
            <div className='overlay'></div>
            <img src={imgScr} 
                loading={idx === 0 ? "eager" : "lazy"}
            />
        </div>)
    )
    
    return (
        <main>
            <section className="hero">
                <div className="image-container">
                    <img src={hero} alt="51st Speakeasy Bar Area" />
                </div>
                <div ref={heroEl} className={scrollStateH ? "hero-headers scrolled": "hero-headers"}>
                    <h1>YOUR NEW FAVORITE SPOT</h1>
                    <h2>Eats <i>•</i> Drinks <i>•</i> Live Music</h2>
                </div>
            </section>

            <section className="description">
                <p>Enjoy an eccliectic experince with a variety of vibes. Jazz, Rock, Electronic 
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
                        onSwiper={(swiper)=> swiperRef.current = swiper}
                        // onTouchEnd={() => {
                        //     if (swiperRef.current) {
                        //         swiperRef.current.slideReset(5500)
                        //     }
                        // }}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: true,
                            pauseOnMouseEnter: false
                        }}
                        // noSwiping={true}
                        // parallax={true}
                        oneWayMovement={true}
                        // zoom
                    >
                        {carouselImgs.map((imgSrc, idx) => (
                            <SwiperSlide key={idx} className='carousel-item'>
                                <div className='overlay'></div>
                                <img
                                    className='carousel-img'
                                    src={imgSrc}
                                    loading="eager"
                                />
                            </SwiperSlide>
                        ))}
                        
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
                        <p>+1 (405) 463-0470 </p> 
                    </div>

                </address>
            </section>



        </main>
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