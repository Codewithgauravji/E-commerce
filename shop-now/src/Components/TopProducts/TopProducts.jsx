import React, { useState } from 'react'
import Img1 from "../../assets/shirt.png"
import Img2 from "../../assets/shirt2.png"
import Img3 from "../../assets/shirt3.png"
import Img4 from "../../assets/jacet1.png"
import Img5 from "../../assets/jacet2.png"
import Img6 from "../../assets/jacet3.png"
import Img7 from "../../assets/shous1.png"
import Img8 from "../../assets/shous2.png"
import Img9 from "../../assets/shous3.png"
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
        title:"Jacket",
        description:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias numquam natus suscipit temporibus quam, repellat debitis dolor possimus doloremque illum aliquid?"
    },
    {
        id:5,
        img:Img5,
        title:"Jacket",
        description:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias numquam natus suscipit temporibus quam, repellat debitis dolor possimus doloremque illum aliquid?"
    },
    {
        id:6,
        img:Img6,
        title:"Jacket",
        description:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias numquam natus suscipit temporibus quam, repellat debitis dolor possimus doloremque illum aliquid?"
    },
    {
        id:7,
        img:Img7,
        title:"Shoes",
        description:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias numquam natus suscipit temporibus quam, repellat debitis dolor possimus doloremque illum aliquid?"
    },
    {
        id:8,
        img:Img8,
        title:"Shoes",
        description:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias numquam natus suscipit temporibus quam, repellat debitis dolor possimus doloremque illum aliquid?"
    },
    {
        id:9,
        img:Img9,
        title:"Shoes",
        description:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias numquam natus suscipit temporibus quam, repellat debitis dolor possimus doloremque illum aliquid?"
    },
    {
        id:10,
        img:Img1,
        title:"Casual Wear",
        description:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias numquam natus suscipit temporibus quam, repellat debitis dolor possimus doloremque illum aliquid?"
    },
    {
        id:11,
        img:Img2,
        title:"Printed Shirts",
        description:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias numquam natus suscipit temporibus quam, repellat debitis dolor possimus doloremque illum aliquid?"
    },
    {
        id:12,
        img:Img3,
        title:"Women Shirts",
        description:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias numquam natus suscipit temporibus quam, repellat debitis dolor possimus doloremque illum aliquid?"
    },
    {
        id:13,
        img:Img4,
        title:"Jacket",
        description:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias numquam natus suscipit temporibus quam, repellat debitis dolor possimus doloremque illum aliquid?"
    },
    {
        id:14,
        img:Img5,
        title:"Jacket",
        description:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias numquam natus suscipit temporibus quam, repellat debitis dolor possimus doloremque illum aliquid?"
    },
    {
        id:15,
        img:Img6,
        title:"Jacket",
        description:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias numquam natus suscipit temporibus quam, repellat debitis dolor possimus doloremque illum aliquid?"
    },
    {
        id:16,
        img:Img7,
        title:"Shoes",
        description:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias numquam natus suscipit temporibus quam, repellat debitis dolor possimus doloremque illum aliquid?"
    },
    {
        id:17,
        img:Img8,
        title:"Shoes",
        description:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias numquam natus suscipit temporibus quam, repellat debitis dolor possimus doloremque illum aliquid?"
    },
    {
        id:18,
        img:Img9,
        title:"Shoes",
        description:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias numquam natus suscipit temporibus quam, repellat debitis dolor possimus doloremque illum aliquid?"
    },
    {
        id:19,
        img:Img1,
        title:"Casual Wear",
        description:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias numquam natus suscipit temporibus quam, repellat debitis dolor possimus doloremque illum aliquid?"
    },
    {
        id:20,
        img:Img2,
        title:"Printed Shirts",
        description:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias numquam natus suscipit temporibus quam, repellat debitis dolor possimus doloremque illum aliquid?"
    },
    {
        id:21,
        img:Img3,
        title:"Women Shirts",
        description:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias numquam natus suscipit temporibus quam, repellat debitis dolor possimus doloremque illum aliquid?"
    },
    {
        id:22,
        img:Img4,
        title:"Jacket",
        description:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias numquam natus suscipit temporibus quam, repellat debitis dolor possimus doloremque illum aliquid?"
    },
    {
        id:23,
        img:Img5,
        title:"Jacket",
        description:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias numquam natus suscipit temporibus quam, repellat debitis dolor possimus doloremque illum aliquid?"
    },
    {
        id:24,
        img:Img6,
        title:"Jacket",
        description:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias numquam natus suscipit temporibus quam, repellat debitis dolor possimus doloremque illum aliquid?"
    },
    {
        id:25,
        img:Img7,
        title:"Shoes",
        description:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias numquam natus suscipit temporibus quam, repellat debitis dolor possimus doloremque illum aliquid?"
    },
    {
        id:26,
        img:Img8,
        title:"Shoes",
        description:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias numquam natus suscipit temporibus quam, repellat debitis dolor possimus doloremque illum aliquid?"
    },
    {
        id:27,
        img:Img9,
        title:"Shoes",
        description:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias numquam natus suscipit temporibus quam, repellat debitis dolor possimus doloremque illum aliquid?"
    },
]

const TopProducts = ({handleOrderPopup}) => {
     const [visibleCount, setVisibleCount] = useState(9); // Initial visible cards
    
        const handleShowMore = () => {
            setVisibleCount((prevCount) => prevCount + 18); // Increment visible cards by 5
        };
  return (
    <div className='container' >
       <div className='text-center mb-10 mt-10 mx-auto' >
        <p data-aos="fade-up" className='text-sm text-primary'>Top Rated Products for you</p>
        <h1 data-aos="fade-up" className='text-3xl font-bold'>Best Products</h1>
        {/* <p data-aos="fade-up" className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quod eius doloremque quos quia quaerat, dolores, nisi deserunt accusamus voluptatem cum.</p> */}
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 mt-16 place-items-center'>
            {ProductsData.slice(0, visibleCount).map((data)=>(
                    <div data-aos="zoom-in" className='rounded-2xl text-center mt-20 bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-h-[500px] max-w-[350px]'>
                        <div>
                            <img src={data.img} alt="" className='max-w-[230px]  block mx-auto transform -translate-y-20 group-hover:scale-110 duration-300 drop-shadow-md'/>
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
                {visibleCount < ProductsData.length && (
                        <div className="flex justify-center">
                            <button
                                onClick={handleShowMore}
                                data-aos="fade-up"
                                className="text-center mt-20 cursor-pointer bg-primary text-white py-1 px-5 rounded-md"
                            >
                                Show More
                            </button>
                        </div>
                      )}
        </div>
       </div>
    </div>
  )
}

export default TopProducts