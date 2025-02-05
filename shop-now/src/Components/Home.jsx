import React, { useEffect, useState } from 'react'
import Navbar from './Navbar/Navbar'
import Hero from './Hero/Hero'
import Products from './Products/Products'
import TopProducts from './TopProducts/TopProducts'
import MensWear from './Products/MensWear'
import Electronic from './Products/Electronic'
import Banner from './Banner/Banner'
import Subscribe from './Subscribe/Subscribe'
import Testimonials from './Testimonials/Testimonials'
import Footer from './Footer/Footer'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Slider1 from './Products/Slider1'
// import Slider1 from './Products/slider1'
function Home({ AddToCart,cart }) {
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
                <Navbar handleOderPopup={handleOrderPopup} cart={cart} />
                <Hero handleOrderPopup={handleOrderPopup} />
                <Products AddToCart={AddToCart}/>
                <Slider1/>
                <MensWear AddToCart={AddToCart}/>
                <TopProducts handleOrderPopup={handleOrderPopup} />
                <Electronic AddToCart={AddToCart}/>
                <Slider1/>
                <Banner />
                <Subscribe />
                <Testimonials />
                <Footer />
            </div>
        </>
    )
}

export default Home