import { useState, useRef, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Links, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Main from '../pages/Main'
import './App.css'
import './Hero.css'
import './Header.css'
import './Footer.css'
import './MenuMain.css'
import './LiveMusic.css'
import './BottlesAndCans.css'
import './HeaderTablet.css'
import './SkeletonLoader.css'
import MenuMain from '../pages/MenuMain'
import Layout from '../components/Layout'
import LiveMusic from '../pages/LiveMusic'
import BottlesAndCans from '../pages/BottlesAndCans'
import { AnimatePresence } from 'framer-motion'

const router = createBrowserRouter(createRoutesFromElements(
  
        <Route element={<Layout/>}>
          <Route path="/" element={<Main/>}/>
          <Route path="/eats" element={<MenuMain/>}/>
          <Route path="/live-music" element={<LiveMusic/>}/>
          <Route path="/bottles-and-cans" element={<BottlesAndCans/>}/>
        </Route>
  

))
function App() {
  // const [count, setCount] = useState(0)

  // const headerEl = useRef(null)



  // <Header scrolled={currScroll}/>

    // <BrowserRouter>
    // </BrowserRouter>

  return (
    <RouterProvider router={router}/>
  )
}

export default App
