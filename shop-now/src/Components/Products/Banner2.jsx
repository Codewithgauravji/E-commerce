import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import ShoppingImage from "../../assets/Banner2.jpg"; // Replace with your image path

const Banner2 = () => {
  useEffect(() => {
    // Initialize AOS on component mount
    AOS.init({
      duration: 1000, // Duration of the animation
      once: true, // Animation triggers only once
    });
  }, []);

  return (
    <div className="relative bg-gray-100 dark:bg-gray-900 text-white py-12 mt-12">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
        {/* Left Section (Text) */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 
            data-aos="fade-right" 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 mb-4"
          >
            Shop the Latest Fashion Trends
          </h1>
          <p 
            data-aos="fade-up" 
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-6"
          >
            Discover the best of fashion, home decor, accessories, and much more. Don’t miss our exclusive offers.
          </p>
          <button 
            data-aos="fade-up" 
            className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:scale-105 duration-200 text-white py-2 px-6 rounded-full shadow-md transition-all"
          >
            Shop Now
          </button>
        </div>

        {/* Right Section (Image) */}
        <div className="md:w-1/2">
          <div className="relative overflow-hidden">
            <img
              data-aos="fade-left"
              src={ShoppingImage}
              alt="Shopping Banner"
              className="w-full h-full object-cover transform transition-all duration-500 hover:scale-105 rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
