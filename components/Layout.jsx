import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { Outlet, useLocation, useResolvedPath } from "react-router-dom";
import HeaderHome from "./HeaderHome";


export default function Layout() {
    const [scrollState, setScrollState] = useState(false)

    // console.log(window.scrollY)
    const pathname = useLocation("/").pathname
    // console.log(pathname)
    useEffect(()=>{
    const handleScroll = () => {
        setScrollState(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
        window.removeEventListener('scroll', handleScroll)
    }


    }, [])

    return (
        <>
            {pathname === '/' ? <HeaderHome scrolled={scrollState}/> : <Header />}
                <Outlet/>
            <Footer/>
        </>
    )
}