import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useState, useContext, createContext, useLayoutEffect } from "react";
import { Outlet, ScrollRestoration, useLocation, useResolvedPath } from "react-router-dom";
import HeaderHome from "./HeaderHome";
import { ClickContext } from '../src/contexts/ClickContext.js'
import { ScreenWidthContext } from '../src/contexts/ScreenWidthContext.js'
import { AnimatePresence } from "framer-motion";


// const ClickContext1 = createContext()

export default function Layout() {
    const [scrollState, setScrollState] = useState(false)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [clicked, setClicked] = useState(false)

    
    const clickContextValue = {clicked, setClicked}
    const screenWidthContextValue = { windowWidth }
    // const clickedContext = useContext(ClickContext)

    // clickCo

    // console.log(window.scrollY)
    const location = useLocation()
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
        setWindowWidth(innerWidth)
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
            <ScreenWidthContext.Provider value={screenWidthContextValue}>
                <ClickContext.Provider value={clickContextValue}>
                    {pathname === '/' ? <HeaderHome scrolled={scrollState}/> : <Header />}
                    {/* {pathname === '/' ? <HeaderHome notDesktop={windowWidth} scrolled={scrollState}/> : <Header notDesktop={windowWidth}  />} */}
                </ClickContext.Provider>
                <AnimatePresence mode="wait">
                        <Outlet key={location.pathname} />
                    </AnimatePresence>
                {/* <Outlet/> */}
                <Footer/>
            </ScreenWidthContext.Provider>

            <ScrollRestoration />
        </>
    )
}