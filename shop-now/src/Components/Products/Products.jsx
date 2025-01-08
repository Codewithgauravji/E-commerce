import React from 'react'
import Img1 from "../../assets/womenn.jpeg"
import Img2 from "../../assets/women2.jpeg"
import Img3 from "../../assets/women3.jpeg"
import Img4 from "../../assets/women4.jpeg"
import Img5 from "../../assets/womendress1.avif"
import Img6 from "../../assets/womendress6.jpg"
import Img7 from "../../assets/womendress7.jpg"
import Img8 from "../../assets/womendress8.jpg"
import Img9 from "../../assets/womendress9.jpg"
import Img10 from "../../assets/womendress10.jpg"
import {FaStar} from "react-icons/fa6"

const  ProductsData = [
    {
        id:1,
        img:Img1,
        title:"Women Ethnic",
        rating:5.0,
        color:"white",
        price:"2000/-",
        aosDelay:"0",
    },
    {
        id:2,
        img:Img2,
        title:"Women western",
        rating:4.0,
        color:"Red",
        price:"1900/-",
        aosDelay:"200",
    },
    {
        id:3,
        img:Img3,
        title:"Goggles",
        rating:4.5,
        color:"Brown",
        price:"2400/-",
        aosDelay:"400",
    },
    {
        id:4,
        img:Img4,
        title:"Women Ethnic",
        rating:4.7,
        color:"Yello",
        price:"1200/-",
        aosDelay:"600",
    },
    {
        id:5,
        img:Img5,
        title:"Red Dress ",
        rating:4.2,
        color:"Black",
        price:"4000/-",
        aosDelay:"800",
    },
    {
        id:6,
        img:Img6,
        title:"Women Dress",
        rating:5.4,
        color:"LightGreen",
        price:"3500/-",
        aosDelay:"0",
    },
    {
        id:7,
        img:Img7,
        title:"Women Comboo",
        rating:4.9,
        color:"Black & Yello",
        price:"3000/-",
        aosDelay:"200",
    },
    {
        id:8,
        img:Img8,
        title:"Dress",
        rating:4.0,
        color:"Brown",
        price:"2100/-",
        aosDelay:"400",
    },
    {
        id:9,
        img:Img9,
        title:"Yello Dress",
        rating:5.7,
        color:"Yello",
        price:"1000/-",
        aosDelay:"600",
    },
    {
        id:10,
        img:Img10,
        title:"Women Jeens",
        rating:4.1,
        color:"Blue",
        price:"1600/-",
        aosDelay:"800",
    },
]
const Products = () => {
  return (
    <div className='mt-14 md-12'>
        <div className='container'>
            <div className='text-center mb-10 max-w-[600px] mx-auto'>
                <p data-aos="fade-up" className='text-sm text-primary'>Top Selling Products for you</p>
                <h1 data-aos="fade-up" className='text-3xl font-bold'>Products</h1>
                {/* <p data-aos="fade-up" className='text-xs text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus officia illum quae!</p> */}
            </div>
            <div>
                <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5 '>
                    {ProductsData.map((data)=>(
                        <div data-aos="fade-up" data-aos-delay={data.aosDelay} key={data.id} className='space-y-3 '>
                            <img src={data.img} alt="Cover image" className='h-[280px] w-[210px] object-cover rounded-md hover:-translate-y-2.5 duration-300' />
                            <div>
                                <h3 className='font-semibold '>{data.title}</h3>
                                <h3 className='flex justify-end absolute right-0 bottom-11 text-blue-600 font-medium'>{data.price}</h3>
                                <p className='text-sm text-gray-600 '>{data.color}</p>
                                <div className='flex items-center gap-1'>
                                    <FaStar className='text-yellow-400 '/>
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

export default Products