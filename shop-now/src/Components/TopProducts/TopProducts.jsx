import React from 'react'
import Img1 from "../../assets/shirt.png"
import Img2 from "../../assets/shirt2.png"
import Img3 from "../../assets/shirt3.png"
import Img4 from "../../assets/Jaket1.png"
import Img5 from "../../assets/Jaket2.png"
import Img6 from "../../assets/Suiter.png"
import {FaStar} from "react-icons/fa"

const ProductsData = [
    {
        id:1,
        img:Img1,
        title:"Casual Wear",
        description:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias numquam natus suscipit temporibus quam, repellat debitis dolor possimus doloremque illum aliquid?"
    },
    {
        id:2,
        img:Img2,
        title:"Printed Shirts",
        description:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias numquam natus suscipit temporibus quam, repellat debitis dolor possimus doloremque illum aliquid?"
    },
    {
        id:3,
        img:Img3,
        title:"Women Shirts",
        description:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias numquam natus suscipit temporibus quam, repellat debitis dolor possimus doloremque illum aliquid?"
    },
    {
        id:4,
        img:Img4,
        title:"Lader Jaket",
        description:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias numquam natus suscipit temporibus quam, repellat debitis dolor possimus doloremque illum aliquid?"
    },
    {
        id:5,
        img:Img5,
        title:"Winter Jaket",
        description:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias numquam natus suscipit temporibus quam, repellat debitis dolor possimus doloremque illum aliquid?"
    },
    {
        id:6,
        img:Img6,
        title:"Winter Soiter",
        description:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias numquam natus suscipit temporibus quam, repellat debitis dolor possimus doloremque illum aliquid?"
    }
]
const TopProducts = ({handleOrderPopup}) => {
  return (
    <div className='container'>
       <div className='text-center mb-10 mt-10 mx-auto'>
        <p data-aos="fade-up" className='text-sm text-primary'>Top Rated Products for you</p>
        <h1 data-aos="fade-up" className='text-3xl font-bold'>Best Products</h1>
        {/* <p data-aos="fade-up" className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quod eius doloremque quos quia quaerat, dolores, nisi deserunt accusamus voluptatem cum.</p> */}
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 mt-16 place-items-center'>
                {ProductsData.map((data)=>(
                    <div data-aos="zoom-in" className='rounded-2xl text-center mt-20 bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-h-[500px] max-w-[350px]'>
                        <div>
                            <img src={data.img} alt="" className='max-w-[230px] block mx-auto transform -translate-y-20 group-hover:scale-110 duration-300 drop-shadow-md'/>
                        </div>
                        <div className='w-full flex items-center justify-center gap-1'>
                            <FaStar className='text-yellow-500'/>
                            <FaStar className='text-yellow-500'/>
                            <FaStar className='text-yellow-500'/>
                            <FaStar className='text-yellow-500'/>
                        </div>
                        <h1 className='text-xl font-bold'>{data.title}</h1>
                        <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>{data.description}</p>
                        <button className='bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mb-5 mt-4 group-hover:bg-white group-hover:text-primary' onClick={handleOrderPopup}>Order Now</button>
                    </div>
                ))}</div>
        </div>
       </div>
    </div>
  )
}

export default TopProducts