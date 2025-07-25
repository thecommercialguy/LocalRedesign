import {useEffect, useRef, useState} from 'react'
import hero from '../assets/hero-img.png'
import contacts from '../assets/contacts-img.png'
import flowers from '../carousel/caro-img-1.jpeg'
import frankMugshot from '../carousel/frank-mugshot.png'
import bugsyMugshot from '../carousel/busgy-mugshot.png'
import bowieMugshot from '../carousel/david-bowie-mugshot.png'
import hendrixMugshot from '../carousel/hendrix-mugshot.png'
import friends from '../carousel/caro-img.png'
import poolTable from '../carousel/caro-img-3.jpeg'
import performer from '../carousel/caro-img-2.png'
import tennis from '../carousel/tennis.jpeg'
import stage from '../assets/band-pic.JPG'
import performers from '../assets/band-pic-2.png'


export default function Main() {
    const [carouselImgs, setCarouselImgs] = useState([stage, frankMugshot, flowers, performers, tennis, hendrixMugshot, poolTable])

    const [scrollStateH, setScrollStateH] = useState(false)

    const heroEl = useRef()

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

    const carouselAfter = carouselImgs.map((item, idx) => (
        <div key={item} className='carousel-item'>
            <div className='overlay'></div>
            <img src={item} 
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
                    <div className="carousel-container">
                        
                        <div className='carousel-item'>
                            <div className='overlay'></div>
                            <img src={stage} 
                                loading='lazy'                            
                            />
                        </div>
                        <div className='carousel-item'>
                            <div className='overlay'></div>
                            <img src={frankMugshot} 
                                loading='lazy'                            
                            />
                        </div>
                        <div className='carousel-item'>
                            <div className='overlay'></div>
                            <img src={flowers} 
                                loading='lazy'                            
                            />
                        </div>
                        <div className='carousel-item'>
                            <div className='overlay'></div>
                            <img src={performers} 
                                loading='lazy'                            
                            />
                        </div>
                        <div className='carousel-item'>
                            <div className='overlay'></div>
                            <img src={tennis} 
                                loading='lazy'                            
                            />
                        </div>
                        
                        <div className='carousel-item'>
                            <div className='overlay'></div>
                            <img src={hendrixMugshot} 
                                loading='lazy'                            
                            />
                        </div>
                        <div className='carousel-item'>
                            <div className='overlay'></div>
                            <img src={poolTable} 
                                loading='lazy'                            
                            />
                        </div>
                        {carouselAfter}
                        
                        


                    </div>
                    {/* <div className="carousel-container after">
                        <div ref={test} className='carousel-item'>
                        <img src={carouselImg2} />
                        </div>
                        <div className='carousel-item'>
                        <img src={carouselImg1} />
                        </div>
                        <div className='carousel-item'>
                        <img src={carouselImg} />
                        </div>
                        <div className='carousel-item'>
                        <img src={carouselImg3} />
                        </div>
                        <div className='carousel-item'>
                        <img src={carouselImg} />
                        </div>
                        <div className='carousel-item'>
                        <img src={carouselImg2} />
                        </div>
                        <div className='carousel-item'>
                        <img src={carouselImg1} />
                        </div>
                        <div className='carousel-item'>
                        <img src={carouselImg} />
                        </div>
                        <div className='carousel-item'>
                        <img src={carouselImg3} />
                        </div>
                        
                        
                        </div> */}
                        {/* <div className='carousel-item'>
                            <img src={carouselImg} />
                            </div> */}

                    
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