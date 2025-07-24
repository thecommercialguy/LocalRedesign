import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useState, useContext, createContext } from "react";
import { Outlet, useLocation, useResolvedPath } from "react-router-dom";
import HeaderHome from "./HeaderHome";
import { ClickContext } from '../src/contexts/ClickContext.js'


// const ClickContext1 = createContext()

export default function Layout() {
    const [scrollState, setScrollState] = useState(false)
    const [windowWidth, setWindowWidth] = useState(false)
    const [clicked, setClicked] = useState(false)

    
    const clickContextValue = {clicked, setClicked}
    // const clickedContext = useContext(ClickContext)

    // clickCo

    // console.log(window.scrollY)
    const pathname = useLocation("/").pathname
    // console.log(pathname)
    // useEffect(()=>{
    // const handleScroll = () => {
    //     setScrollState(window.scrollY > 20)
    // }

    // window.addEventListener('scroll', handleScroll)

    // return () => {
    //     window.removeEventListener('scroll', handleScroll)
    // }


    // }, [])

    useEffect(()=>{
    const handleScroll = () => {
        setScrollState(window.scrollY > 20)
    }
    const checkResize = () => {
        const innerWidth = window.innerWidth
        console.log(innerWidth)
        setWindowWidth(innerWidth < 1440)
    }

    window.addEventListener('scroll', handleScroll)
    checkResize()
    window.addEventListener('resize', checkResize)
    return () => {
        window.removeEventListener('scroll', handleScroll)
    }


    }, [])
 

    return (
        <>
            <ClickContext.Provider value={clickContextValue}>
                {pathname === '/' ? <HeaderHome notDesktop={windowWidth} scrolled={scrollState}/> : <Header notDesktop={windowWidth}  />}
            </ClickContext.Provider>
                <Outlet/>
            <Footer/>
        </>
    )
}