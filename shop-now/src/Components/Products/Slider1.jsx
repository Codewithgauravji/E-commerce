import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Slider1 = () => {
    const slides = [
        {
            id: 1,
            img: "https://images.unsplash.com/photo-1738273473785-99c1fc498c14?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",
            title: "Android Advantage",
            description: "Elevate your Everyday With Premium Android Phones",
            price: "From ₹29,999*",
        },
        {
            id: 2,
            img: "https://images.unsplash.com/photo-1738273473785-99c1fc498c14?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",
            title: "Premium Devices",
            description: "Get the best performance with the latest Android devices",
            price: "From ₹39,999*",
        },
        {
            id: 3,
            img: "https://images.unsplash.com/photo-1738273473785-99c1fc498c14?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",
            title: "Premium Devices",
            description: "Get the best performance with the latest Android devices",
            price: "From ₹39,999*",
        },
        {
            id: 4,
            img: "https://images.unsplash.com/photo-1738273473785-99c1fc498c14?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",
            title: "Premium Devices",
            description: "Get the best performance with the latest Android devices",
            price: "From ₹39,999*",
        },
        {
            id: 5,
            img: "https://images.unsplash.com/photo-1738273473785-99c1fc498c14?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",
            title: "Premium Devices",
            description: "Get the best performance with the latest Android devices",
            price: "From ₹39,999*",
        },
    ];

    return (
        <div className="flex justify-start ">
        <div className="max-w-full mx-auto my-8 w-full ">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop={true}
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className=" p-6 rounded-lg shadow-lg text-center  dark:bg-gray-900 dark:text-white duration-200">
                            <img src={slide.img} alt={slide.title} className="mx-auto mb-4" />
                            <h2 className="text-xl font-bold text-gray-800">{slide.title}</h2>
                            <p className="text-gray-600">{slide.description}</p>
                            <p className="text-lg font-semibold text-green-600 mt-2">
                                {slide.price}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
        </div>
    );
};

export default Slider1;