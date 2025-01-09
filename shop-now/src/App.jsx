import AOS from 'aos'
import 'aos/dist/aos.css'
import React, { useEffect, useState } from 'react'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Products from './Components/Products/Products'
import TopProducts from './Components/TopProducts/TopProducts'
import Subscribe from './Components/Subscribe/Subscribe'
import Testimonials from './Components/Testimonials/Testimonials'
import Footer from './Components/Footer/Footer'
import MensWear from './Components/Products/MensWear'
import Electronic from './Components/Products/Electronic'

// import './App.css'

function App() {
  const [orderPopup, setOrderPopup] = useState(false)

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup)
  }

  useEffect(() => {
    AOS.init({
       duration: 800,
        easing: 'ease-in-out',
        delay: 100,
        offset: 100, 
      });
      AOS.refresh();
  }, []);
  return (
    <>
      <div className='bg-white dark:bg-gray-900 dark:text-white duration-200'>
        <Navbar handleOderPopup={handleOrderPopup}/>
        <Hero handleOderPopup={handleOrderPopup}/>
        <Products/>
        <TopProducts handleOderPopup={handleOrderPopup}/>
        <MensWear/>
        <Electronic/>
        <Banner/>
        <Subscribe/>
        <Testimonials/>
        <Footer/>
      </div>
    </>
  )
}

export default App
