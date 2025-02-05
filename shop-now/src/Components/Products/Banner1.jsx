import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Banner = () => {
  useEffect(() => {
    // Initialize AOS on component mount
    AOS.init({
      duration: 1000, // Duration of the animation
      once: true, // Animation triggers only once
    });
  }, []);
    return (
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-10">
            <div className="container mx-auto px-4 text-center">
                <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-bold mb-4">
                    🛍️ Huge Discount on Your Favorite Products! 🛍️
                </h2>
                <p data-aos="fade-up" className="text-lg md:text-xl mb-6">
                    Save up to 50% off on selected items this season. Shop now and grab your favorites before they run out!
                </p>
                <div className="flex justify-center">
                    <a
                        data-aos="fade-up"
                        href=""
                        className="bg-yellow-500 hover:bg-yellow-600 text-black text-lg font-semibold py-3 px-6 rounded-md transition duration-300 ease-in-out"
                    >
                        Shop Now
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Banner;
