import React, { useState } from 'react'
import Img1 from "../../assets/man1.jpg"
import Img2 from "../../assets/man2.jpg"
import Img3 from "../../assets/man3.jpg"
import Img4 from "../../assets/man4.jpg"
import Img5 from "../../assets/man5.jpg"
import Img6 from "../../assets/man6.jpg"
import Img7 from "../../assets/man6.jpg"
import Img8 from "../../assets/man8.jpg"
import Img9 from "../../assets/man6.jpg"
import Img10 from "../../assets/man6.jpg"
import { FaHeart, FaStar } from "react-icons/fa6"

const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: "Pant & Shirt",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        price: 1000,
        aosDelay: "0",
    },
    {
        id: 2,
        img: Img2,
        title: "T-Shirt",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        price: 500,
        aosDelay: "200",
    },
    {
        id: 3,
        img: Img3,
        title: "Shirt",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        price: 700,
        aosDelay: "400",
    },
    {
        id: 4,
        img: Img4,
        title: "Man's Jeens",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        price: 900,
        aosDelay: "600",
    },
    {
        id: 5,
        img: Img5,
        title: "Pant & Shirt",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        price: 1300,
        aosDelay: "800",
    },
    {
        id: 6,
        img: Img6,
        title: "Formal Pant & Shirt",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        price: 1200,
        aosDelay: "0",
    },
    {
        id: 7,
        img: Img7,
        title: "Formal Pant & Shirt",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        price: 1200,
        aosDelay: "200",
    },
    {
        id: 8,
        img: Img8,
        title: "White Shirt",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        price: 600,
        aosDelay: "400",
    },
    {
        id: 9,
        img: Img9,
        title: "Formal Pant & Shirt",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        price: 1200,
        aosDelay: "600",
    },
    {
        id: 10,
        img: Img10,
        title: "Formal Pant & Shirt",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        price: 1200,
        aosDelay: "800",
    },
]
const MensWear = ({AddToCart}) => {
    const [likedProducts, setLikedProducts] = useState({});
    const toggleLike = (id) => {
        setLikedProducts((prev) => ({ ...prev, [id]: !prev[id] }));
    };
    return (
        <div className='mt-14 md-12'>
            <div className='container'>
                <div className='text-center mb-10 max-w-[600px] mx-auto'>
                    <p data-aos="fade-up" className='text-sm text-primary'>Men's styles wears in besr price</p>
                    <h1 data-aos="fade-up" className='text-3xl font-bold'>Man's Wear</h1>
                    {/* <p data-aos="fade-up" className='text-xs text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus officia illum quae!</p> */}
                </div>
                <div>
                    <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
                        {ProductsData.map((data) => (
                            <div>
                                <div data-aos="fade-up" data-aos-delay={data.aosDelay} key={data.id} className='space-y-3 '>
                                    <div key={data.id} className="relative hover:-translate-y-1.5 duration-300">
                                        {/* Heart Icon for Liking */}
                                        <FaHeart
                                            className={`absolute top-2 right-2 text-2xl cursor-pointer z-10  ${likedProducts[data.id] ? "text-red-500" : "text-gray-400"
                                                }`}
                                            onClick={() => toggleLike(data.id)}
                                        />
                                        <img src={data.img} alt="Cover image" className='h-[170px] w-[210px] object-cover rounded-md sm:h-[280px] sm:w-[210px]' />
                                        <div>
                                            <h3 className="font-semibold">{data.title}</h3>
                                            <div className="flex items-center gap-1">
                                                <h3 className="flex justify-start bottom-9 text-blue-600 font-medium cursor-pointer">
                                                    {data.price}
                                                </h3>
                                            </div>
                                            <p className="flex">
                                                {data.rating1}
                                            </p>
                                            <div className="flex justify-between mt-2">
                                                <button className="border py-0 px-1 rounded-md bg-lime-600 text-black sm:py-1 sm:px-3">Buy now</button>
                                                <button className="border py- px-1 rounded-md  bg-lime-600 text-black sm:py-1 sm:px-3" onClick={() => AddToCart(data)}>Add to cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MensWear