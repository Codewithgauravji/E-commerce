import React from 'react'
import Img1 from "../../assets/Electric1.avif"
import Img2 from "../../assets/Electric2.avif"
import Img3 from "../../assets/Electric3.avif"
import Img4 from "../../assets/Electric4.avif"
import Img5 from "../../assets/Electric5.avif"
import Img6 from "../../assets/Electric6.avif"
import Img7 from "../../assets/Electric7.avif"
import Img8 from "../../assets/Electric8.avif"
import Img9 from "../../assets/Electric9.avif"
import Img10 from "../../assets/Electric10.avif"
import { FaHeart, FaStar } from "react-icons/fa6"

const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: "Mixer Grinder",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "Brown",
        price: "5000/-",
        aosDelay: "0",
    },
    {
        id: 2,
        img: Img2,
        title: "Ear buds",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "Black",
        price: "1999/-",
        aosDelay: "200",
    },
    {
        id: 3,
        img: Img3,
        title: "Headphone",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "Gray",
        price: "4000/-",
        aosDelay: "400",
    },
    {
        id: 4,
        img: Img4,
        title: "Ceiling Fan",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "Gray",
        price: "2300/-",
        aosDelay: "600",
    },
    {
        id: 5,
        img: Img5,
        title: "Refrigerator",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "Pink",
        price: "19000/-",
        aosDelay: "800",
    },
    {
        id: 6,
        img: Img6,
        title: "Gaming Remote",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "Black",
        price: "7000/-",
        aosDelay: "0",
    },
    {
        id: 7,
        img: Img7,
        title: "LED Tv",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "Black",
        price: "30000/-",
        aosDelay: "200",
    },
    {
        id: 8,
        img: Img8,
        title: "Phones",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "Golden",
        price: "42000/-",
        aosDelay: "400",
    },
    {
        id: 9,
        img: Img9,
        title: "Air Conditioner",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "White",
        price: "35000/-",
        aosDelay: "600",
    },
    {
        id: 10,
        img: Img10,
        title: "Watch",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "White",
        price: "3200/-",
        aosDelay: "800",
    },
]
const Electronic = () => {
    const [likedProducts, setLikedProducts] = React.useState({});
    const toggleLike = (id) => {
        setLikedProducts((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <div className='mt-14 md-12'>
            <div className='container'>
                <div className='text-center mb-10 max-w-[600px] mx-auto'>
                    <p data-aos="fade-up" className='text-sm text-primary'>Top Selling Products for you</p>
                    <h1 data-aos="fade-up" className='text-3xl font-bold'>Electronic Devices</h1>
                    {/* <p data-aos="fade-up" className='text-xs text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus officia illum quae!</p> */}
                </div>
                <div>
                    <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5 '>
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
                                            <h3 className="font-semibold mt-0 sm:mt-1">{data.title}</h3>
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
                                                <button className="border py- px-1 rounded-md  bg-lime-600 text-black sm:py-1 sm:px-3">Add to cart</button>
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

export default Electronic