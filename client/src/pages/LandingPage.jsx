import React from 'react'
import DarkModeSwitcher from '../components/DarkModeSwitcher'
import Header from '../components/Header'
import Footer from '../components/Footer'

const LandingPage = () => {
  return (
    <>
    <Header/>
    <div className='w-full h-[100vh] dark:bg-black dark:text-white flex items-center justify-center' >
        <h1 className="heading-l flex gap-4 items-center">
        LandingPage
        <DarkModeSwitcher/>
        </h1>
    </div>
    <Footer />
    </>
  )
}

export default LandingPage