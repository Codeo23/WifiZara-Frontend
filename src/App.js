import React, { useEffect, useRef, useState } from 'react'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'
import AppRouter from './router'
import { AnimatePresence } from 'framer-motion'
import Loader from './Front_office/components/Loader/Loader'

const App = () => {
    const AppRef = useRef(null)
    const [loaded, setLoaded] = useState(false)

    useEffect(()=>{
        setTimeout(()=>{
            setLoaded(true)
        },3000)
    },[])
  return (
    <>
        <AnimatePresence>
            {loaded ? null : <Loader/>}
        </AnimatePresence>
        <LocomotiveScrollProvider
            options={{
                smooth:true
            }}
            watch={[]}
            containerRef={AppRef}
        >
            <main data-scroll-container ref={AppRef}>
                <AppRouter/>
            </main>
        </LocomotiveScrollProvider>
    </>
  )
}

export default App