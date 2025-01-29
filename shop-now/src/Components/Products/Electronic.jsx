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
import { FaStar } from "react-icons/fa6"

const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: "Mixer Grinder",
        rating: 2.3,
        color: "Brown",
        price: "5000/-",
        aosDelay: "0",
    },
    {
        id: 2,
        img: Img2,
        title: "Ear buds",
        rating: 4.0,
        color: "Black",
        price: "1999/-",
        aosDelay: "200",
    },
    {
        id: 3,
        img: Img3,
        title: "Headphone",
        rating: 4.5,
        color: "Gray",
        price: "4000/-",
        aosDelay: "400",
    },
    {
        id: 4,
        img: Img4,
        title: "Ceiling Fan",
        rating: 4.7,
        color: "Gray",
        price: "2300/-",
        aosDelay: "600",
    },
    {
        id: 5,
        img: Img5,
        title: "Refrigerator",
        rating: 4.2,
        color: "Pink",
        price: "19000/-",
        aosDelay: "800",
    },
    {
        id: 6,
        img: Img6,
        title: "Gaming Remote",
        rating: 5.4,
        color: "Black",
        price: "7000/-",
        aosDelay: "0",
    },
    {
        id: 7,
        img: Img7,
        title: "LED Tv",
        rating: 4.9,
        color: "Black",
        price: "30000/-",
        aosDelay: "200",
    },
    {
        id: 8,
        img: Img8,
        title: "Phones",
        rating: 4.0,
        color: "Golden",
        price: "42000/-",
        aosDelay: "400",
    },
    {
        id: 9,
        img: Img9,
        title: "Air Conditioner",
        rating: 5.7,
        color: "White",
        price: "35000/-",
        aosDelay: "600",
    },
    {
        id: 10,
        img: Img10,
        title: "Watch",
        rating: 4.1,
        color: "White",
        price: "3200/-",
        aosDelay: "800",
    },
]
const Electronic = () => {

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
                            <div className=' hover:-translate-y-2.5 duration-300'>
                            <div data-aos="fade-up" data-aos-delay={data.aosDelay} key={data.id} className='space-y-3 '>
                                <img src={data.img} alt="Cover image" className='h-[280px] w-[210px] object-cover rounded-md' />
                                <div>
                                    <h3 className='font-semibold '>{data.title}</h3>
                                    <h3 className='flex justify-end absolute right-0 bottom-11 text-blue-600 font-medium'>{data.price}</h3>
                                    <p className='text-sm text-gray-600 '>{data.color}</p>
                                    <div className='flex items-center gap-1'>
                                        <FaStar className='text-yellow-400 ' />
                                        <FaStar className='text-yellow-400 ' />
                                        <span>{data.rating}</span>
                                    </div>
                                </div>
                            </div>
                            </div>
                        ))}
                    </div>
                    <div className='flex justify-center '>
                        <button className='text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md '>View All button</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Electronic