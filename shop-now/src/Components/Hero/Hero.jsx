import React from "react";
import Image1 from "../../assets/women.jpeg";
import Image2 from "../../assets/shopping.jpeg";
import Image3 from "../../assets/sale.jpeg";
import Slider from "react-slick";

const ImageList = [
    {
        id: 1,
        img: Image1,
        title: "Up to 50% off on all Men's Wear",
        description:
            "Discover the best of men's fashion at unbeatable prices. Hurry, while stocks last!",
    },
    {
        id: 2,
        img: Image2,
        title: "30% off on all Women's Wear",
        description:
            "Shop our exclusive collection of women's wear and get 30% off. Limited time only!",
    },
    {
        id: 3,
        img: Image3,
        title: "70% off on All Products Sale",
        description:
            "Don’t miss out on our mega sale. Up to 70% off on everything. Shop now and save big!",
    },
];

const Hero = ({ handleOrderPopup }) => {
    var settings = {
        dots: true, // Add dots navigation
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: true,
        pauseOnFocus: true,
    };

    return (
        <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-slate-950 dark:text-white duration-300">
            <div className="h-[700px] w-[700px] bg-primary/40 absolute top-1/2 right-0 rounded-3xl rotate-45 -z-5"></div>
            <div className="container pb-8 sm:pb-0">
                <Slider {...settings}>
                    {ImageList.map((data) => (
                        <div key={data.id}>
                            <div className="grid grid-cols-1 sm:grid-cols-2">
                                {/* Left Section (Text and Call to Action) */}
                                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                                    <h1
                                        className="text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600"
                                        data-aos="zoom-out"
                                        data-aos-duration="500"
                                        data-aos-once="true"
                                    >
                                        {data.title}
                                    </h1>
                                    <p
                                        className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-200"
                                        data-aos="fade-up"
                                        data-aos-duration="500"
                                        data-aos-delay="100"
                                    >
                                        {data.description}
                                    </p>
                                    <div
                                        data-aos="fade-up"
                                        data-aos-duration="500"
                                        data-aos-delay="300"
                                    >
                                        <button
                                            onClick={handleOrderPopup}
                                            className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:scale-105 duration-200 text-white py-2 px-6 rounded-full shadow-md transition-all"
                                        >
                                            Order Now
                                        </button>
                                    </div>
                                </div>

                                {/* Right Section (Image) */}
                                <div className="order-1 sm:-order-2">
                                    <div
                                        className="relative z-10"
                                        data-aos="zoom-in"
                                        data-aos-once="true"
                                    >
                                        <img
                                            src={data.img}
                                            alt="slider images"
                                            className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] object-cover mx-auto transform transition-all hover:scale-105"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Hero;
