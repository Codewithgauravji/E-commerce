import React, { useState } from "react";
import Img1 from "../../assets/womenn.jpeg";
import Img2 from "../../assets/women2.jpeg";
import Img3 from "../../assets/women3.jpeg";
import Img4 from "../../assets/women4.jpeg";
import Img5 from "../../assets/womendress1.avif";
import Img6 from "../../assets/womendress6.jpg";
import Img7 from "../../assets/womendress7.jpg";
import Img8 from "../../assets/womendress8.jpg";
import Img9 from "../../assets/womendress9.jpg";
import Img10 from "../../assets/womendress10.jpg";
import Img11 from "../../assets/women11.jpg";
import Img12 from "../../assets/women12.jpg";
import Img13 from "../../assets/women13.jpg";
import Img14 from "../../assets/women14.jpg";
import Img15 from "../../assets/women15.jpg";
import Img16 from "../../assets/women16.jpg";
import Img17 from "../../assets/women17.jpg";
import Img18 from "../../assets/women18.jpg";
import Img19 from "../../assets/women19.jpg";
import Img20 from "../../assets/women20.jpg";
import Img21 from "../../assets/women21.jpg";
import Img22 from "../../assets/women22.jpg";
import Img23 from "../../assets/women23.jpg";
import Img24 from "../../assets/women24.jpg";
import Img25 from "../../assets/women25.jpg";
import Img26 from "../../assets/women25.jpg";
import Img27 from "../../assets/women25.jpg";
import Img28 from "../../assets/women25.jpg";
import Img29 from "../../assets/women25.jpg";
import Img30 from "../../assets/women25.jpg";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: "Women Ethnic",
        rating1: <FaStar className='text-yellow-400 ' />,
        rating2: <FaStar className='text-yellow-400 ' />,
        color: "white",
        price: "2000/-",
        aosDelay: "0",
    },
    {
        id: 2,
        img: Img2,
        title: "Women western",
        rating1: <FaStar className='text-yellow-400 ' />,
        rating3: <FaStar className='text-yellow-400 ' />,
        rating4: <FaStar className='text-yellow-400 ' />,
        color: "Red",
        price: "1900/-",
        aosDelay: "200",
    },
    {
        id: 3,
        img: Img3,
        title: "Goggles",
        rating1: <FaStar className='text-yellow-400 ' />,
        color: "Brown",
        price: "2400/-",
        aosDelay: "400",
    },
    {
        id: 4,
        img: Img4,
        title: "Women Ethnic",
        rating1: <FaStar className='text-yellow-400 ' />,
        color: "Yello",
        price: "1200/-",
        aosDelay: "600",
    },
    {
        id: 5,
        img: Img5,
        title: "Red Dress ",
        rating1: <FaStar className='text-yellow-400 ' />,
        rating2: <FaStar className='text-yellow-400 ' />,
        rating4: <FaStar className='text-yellow-400 ' />,
        rating3: <FaStar className='text-yellow-400 ' />,
        color: "Black",
        price: "4000/-",
        aosDelay: "800",
    },
    {
        id: 6,
        img: Img6,
        title: "Women Dress",
        rating1: <FaStar className='text-yellow-400 ' />,
        rating3: <FaStar className='text-yellow-400 ' />,
        rating4: <FaStar className='text-yellow-400 ' />,
        color: "LightGreen",
        price: "3500/-",
        aosDelay: "0",
    },
    {
        id: 7,
        img: Img7,
        title: "Women Comboo",
        rating1: <FaStar className='text-yellow-400 ' />,
        color: "Black & Yello",
        price: "3000/-",
        aosDelay: "200",
    },
    {
        id: 8,
        img: Img8,
        title: "Dress",
        rating1: <FaStar className='text-yellow-400 ' />,
        color: "Brown",
        price: "2100/-",
        aosDelay: "400",
    },
    {
        id: 9,
        img: Img9,
        title: "Yello Dress",
        rating1: <FaStar className='text-yellow-400 ' />,
        rating2: <FaStar className='text-yellow-400 ' />,
        color: "Yello",
        price: "1000/-",
        aosDelay: "600",
    },
    {
        id: 10,
        img: Img10,
        title: "Women Jeens",
        rating1: <FaStar className='text-yellow-400 ' />,
        color: "Blue",
        price: "1600/-",
        aosDelay: "800",
    },
    {
        id: 11,
        img: Img11,
        title: "Women Ethnic",
        rating1: <FaStar className='text-yellow-400 ' />,
        rating2: <FaStar className='text-yellow-400 ' />,
        color: "white",
        price: "2000/-",
        aosDelay: "0",
    },
    {
        id: 12,
        img: Img12,
        title: "Women western",
        rating1: <FaStar className='text-yellow-400 ' />,
        rating3: <FaStar className='text-yellow-400 ' />,
        rating4: <FaStar className='text-yellow-400 ' />,
        color: "Red",
        price: "1900/-",
        aosDelay: "200",
    },
    {
        id: 13,
        img: Img13,
        title: "Goggles",
        rating1: <FaStar className='text-yellow-400 ' />,
        rating2: <FaStar className='text-yellow-400 ' />,
        color: "Brown",
        price: "2400/-",
        aosDelay: "400",
    },
    {
        id: 14,
        img: Img14,
        title: "Women Ethnic",
        rating1: <FaStar className='text-yellow-400 ' />,
        color: "Yello",
        price: "1200/-",
        aosDelay: "600",
    },
    {
        id: 15,
        img: Img15,
        title: "Red Dress ",
        rating1: <FaStar className='text-yellow-400 ' />,
        rating2: <FaStar className='text-yellow-400 ' />,
        color: "Black",
        price: "4000/-",
        aosDelay: "800",
    },
    {
        id: 16,
        img: Img16,
        title: "Women Dress",
        rating1: <FaStar className='text-yellow-400 ' />,
        color: "LightGreen",
        price: "3500/-",
        aosDelay: "0",
    },
    {
        id: 17,
        img: Img17,
        title: "Women Comboo",
        rating1: <FaStar className='text-yellow-400 ' />,
        rating2: <FaStar className='text-yellow-400 ' />,
        color: "Black & Yello",
        price: "3000/-",
        aosDelay: "200",
    },
    {
        id: 18,
        img: Img18,
        title: "Dress",
        rating1: <FaStar className='text-yellow-400 ' />,
        rating4: <FaStar className='text-yellow-400 ' />,
        rating3: <FaStar className='text-yellow-400 ' />,
        color: "Brown",
        price: "2100/-",
        aosDelay: "400",
    },
    {
        id: 19,
        img: Img19,
        title: "Yello Dress",
        rating1: <FaStar className='text-yellow-400 ' />,
        rating2: <FaStar className='text-yellow-400 ' />,
        color: "Yello",
        price: "1000/-",
        aosDelay: "600",
    },
    {
        id: 20,
        img: Img20,
        title: "Women Jeens",
        rating1: <FaStar className='text-yellow-400 ' />,
        color: "Blue",
        price: "1600/-",
        aosDelay: "800",
    },
    {
        id: 21,
        img: Img21,
        title: "Women Ethnic",
        rating1: <FaStar className='text-yellow-400 ' />,
        rating2: <FaStar className='text-yellow-400 ' />,
        color: "white",
        price: "2000/-",
        aosDelay: "0",
    },
    {
        id: 22,
        img: Img22,
        title: "Women western",
        rating1: <FaStar className='text-yellow-400 ' />,
        rating3: <FaStar className='text-yellow-400 ' />,
        rating4: <FaStar className='text-yellow-400 ' />,
        color: "Red",
        price: "1900/-",
        aosDelay: "200",
    },
    {
        id: 23,
        img: Img23,
        title: "Goggles",
        rating1: <FaStar className='text-yellow-400 ' />,
        rating2: <FaStar className='text-yellow-400 ' />,
        color: "Brown",
        price: "2400/-",
        aosDelay: "400",
    },
    {
        id: 24,
        img: Img24,
        title: "Women Ethnic",
        rating1: <FaStar className='text-yellow-400 ' />,
        color: "Yello",
        price: "1200/-",
        aosDelay: "600",
    },
    {
        id: 25,
        img: Img25,
        title: "Red Dress ",
        rating1: <FaStar className='text-yellow-400 ' />,
        rating2: <FaStar className='text-yellow-400 ' />,
        color: "Black",
        price: "4000/-",
        aosDelay: "800",
    },
    {
        id: 26,
        img: Img26,
        title: "Women Dress",
        rating1: <FaStar className='text-yellow-400 ' />,
        color: "LightGreen",
        price: "3500/-",
        aosDelay: "0",
    },
    {
        id: 27,
        img: Img27,
        title: "Women Comboo",
        rating1: <FaStar className='text-yellow-400 ' />,
        rating2: <FaStar className='text-yellow-400 ' />,
        color: "Black & Yello",
        price: "3000/-",
        aosDelay: "200",
    },
    {
        id: 28,
        img: Img28,
        title: "Dress",
        rating1: <FaStar className='text-yellow-400 ' />,
        rating4: <FaStar className='text-yellow-400 ' />,
        rating3: <FaStar className='text-yellow-400 ' />,
        color: "Brown",
        price: "2100/-",
        aosDelay: "400",
    },
    {
        id: 29,
        img: Img29,
        title: "Yello Dress",
        rating1: <FaStar className='text-yellow-400 ' />,
        rating2: <FaStar className='text-yellow-400 ' />,
        color: "Yello",
        price: "1000/-",
        aosDelay: "600",
    },
    {
        id: 30,
        img: Img30,
        title: "Women Jeens",
        rating1: <FaStar className='text-yellow-400 ' />,
        color: "Blue",
        price: "1600/-",
        aosDelay: "800",
    },
];

const Products = () => {
    const [visibleCount, setVisibleCount] = useState(10); // Initial visible cards

    const handleShowMore = () => {
        setVisibleCount((prevCount) => prevCount + 20); // Increment visible cards by 5
    };

    return (
        <div className="mt-14 mb-12">
            <div className="container">
                <div className="text-center mb-10 max-w-[600px] mx-auto">
                    <p data-aos="fade-up" className="text-sm text-primary">
                        Top Selling Products for you
                    </p>
                    <h1 data-aos="fade-up" className="text-3xl font-bold">Products</h1>
                </div>
                <div>
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
                        {ProductsData.slice(0, visibleCount).map((data) => (
                            <div className=" hover:-translate-y-2.5 duration-300">
                            <div
                                data-aos="fade-up"
                                data-aos-delay={data.aosDelay}
                                key={data.id}
                                className="space-y-3"
                            >
                                <img
                                    src={data.img}
                                    alt="Cover image"
                                    className="h-[280px] w-[210px] object-cover rounded-md"
                                />
                                <div>
                                    <h3 className="font-semibold">{data.title}</h3>
                                    <div className="flex items-center gap-1">
                                        <h3 className="flex justify-start bottom-9 text-blue-600 font-medium cursor-pointer">
                                            {data.price}
                                        </h3>
                                    </div>
                                    <p className="flex">
                                        {data.rating1}
                                        {data.rating2}
                                        {data.rating3}
                                        {data.rating4}
                                    </p>
                                </div>
                            </div>
                            </div>
                        ))}
                    </div>
                    {visibleCount < ProductsData.length && (
                        <div className="flex justify-center">
                            <button
                                onClick={handleShowMore}
                                data-aos="fade-up"
                                className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md"
                            >
                                Show More
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Products;
