import React from "react";
import Image1 from "../../assets/women.jpeg";
import Image2 from "../../assets/shopping.jpeg";
import Image3 from "../../assets/sale.jpeg";
import Slider from "react-slick";

const ImageList = [
    {
        id: 1,
        img: Image1,
        title: "Upto 50% off on all Men's Wear",
        description:
            "Tap into the Fastest-Growing Market in the World. Social commerce is transforming the way we buy and sell. With billions of users on social media platforms, the potential for growth and success is unparalleled.",
    },
    {
        id: 2,
        img: Image2,
        title: "30% off on all Women's Wear",
        description:
            "Introducing Social Commerce: Where Social Media Meets Shopping. Experience the next evolution of online retail, where customers and businesses come together in a revolutionary way.",
    },
    {
        id: 3,
        img: Image3,
        title: "70% off on all Products Sale",
        description:
            "Take your love for travel to the next level by becoming a promoter with Shopwithme. As a “Travelforfree” partner, you’ll not only enjoy the incredible travel deals and discounts but also have the opportunity to travel for free.",
    },
];

const Hero = ({ handleOrderPopup }) => {
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
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
                                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                                    <h1
                                        data-aos="zoom-out"
                                        data-aos-duration="500"
                                        data-aos-once="true"
                                        className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                                    >
                                        {data.title}
                                    </h1>
                                    <p
                                        data-aos="fade-up"
                                        data-aos-duration="500"
                                        data-aos-delay="100"
                                        className="text-sm"
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
                                            className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
                                        >
                                            Order Now
                                        </button>
                                    </div>
                                </div>
                                <div className="order-1 sm:-order-2">
                                    <div
                                        data-aos="zoom-in"
                                        data-aos-once="true"
                                        className="relative z-10"
                                    >
                                        <img
                                            src={data.img}
                                            alt="slider images"
                                            className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto"
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