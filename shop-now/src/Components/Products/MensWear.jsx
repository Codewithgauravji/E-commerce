import React from 'react'
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
import { FaStar } from "react-icons/fa6"

const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: "Pant & Shirt",
        rating: 5.0,
        color: "Dark Blue",
        price:"1000/-",
        aosDelay: "0",
    },
    {
        id: 2,
        img: Img2,
        title: "T-Shirt",
        rating: 4.0,
        color: "Yello",
        price:"500/-",
        aosDelay: "200",
    },
    {
        id: 3,
        img: Img3,
        title: "Shirt",
        rating: 4.5,
        color: "Gray",
        price:"700/-",
        aosDelay: "400",
    },
    {
        id: 4,
        img: Img4,
        title: "Man's Jeens",
        rating: 4.7,
        color: "Blue",
        price:"900/-",
        aosDelay: "600",
    },
    {
        id: 5,
        img: Img5,
        title: "Pant & Shirt",
        rating: 4.2,
        color: "Gray",
        price:"1300/-",
        aosDelay: "800",
    },
    {
        id: 6,
        img: Img6,
        title: "Formal Pant & Shirt",
        rating: 5.4,
        color: "Blue",
        price:"1200/-",
        aosDelay: "0",
    },
    {
        id: 7,
        img: Img7,
        title: "Formal Pant & Shirt",
        rating: 4.9,
        color: "Blue",
        price:"1200/-",
        aosDelay: "200",
    },
    {
        id: 8,
        img: Img8,
        title: "White Shirt",
        rating: 4.0,
        color: "White",
        price:"600/-",
        aosDelay: "400",
    },
    {
        id: 9,
        img: Img9,
        title: "Formal Pant & Shirt",
        rating: 5.7,
        color: "Blue",
        price:"1200/-",
        aosDelay: "600",
    },
    {
        id: 10,
        img: Img10,
        title: "Formal Pant & Shirt",
        rating: 4.1,
        color: "Blue",
        price:"1200/-",
        aosDelay: "800",
    },
]
const MensWear = () => {
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
                            <div data-aos="fade-up" data-aos-delay={data.aosDelay} key={data.id} className='space-y-3 '>
                                <img src={data.img} alt="Cover image" className='h-[280px] w-[210px] object-cover rounded-md hover:-translate-y-2.5 duration-300' />
                                <div>
                                    <h3 className='font-semibold'>{data.title}</h3>
                                    <h3 className='flex justify-end absolute right-0 bottom-11 text-blue-600 font-medium'>{data.price}</h3>
                                    <p className='text-sm text-gray-600 '>{data.color}</p>
                                    <div className='flex items-center gap-1'>
                                        <FaStar className='text-yellow-400 ' />
                                        <span>{data.rating}</span>
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

export default MensWear