import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Banner from '../Banner/Banner'
import Footer from '../Footer/Footer'
import { FaStar } from 'react-icons/fa6';
import AOS from "aos";
import "aos/dist/aos.css";
const ProductsData = [
    {
        id: 1,
        img: "https://images.unsplash.com/photo-1621335829175-95f437384d7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVuJTIwd2VhcnxlbnwwfHwwfHx8MA%3D%3D",
        title: "Women Ethnic",
        rating1: <FaStar className='text-yellow-400 ' />,
        rating2: <FaStar className='text-yellow-400 ' />,
        color: "white",
        price: "2000/-",
        aosDelay: "0",
    },
    {
        id: 2,
        img: "https://images.unsplash.com/photo-1621335829175-95f437384d7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVuJTIwd2VhcnxlbnwwfHwwfHx8MA%3D%3D",
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
        img: "https://images.unsplash.com/photo-1621335829175-95f437384d7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVuJTIwd2VhcnxlbnwwfHwwfHx8MA%3D%3D",
        title: "Goggles",
        rating1: <FaStar className='text-yellow-400 ' />,
        color: "Brown",
        price: "2400/-",
        aosDelay: "400",
    },
    {
        id: 4,
        img: "https://images.unsplash.com/photo-1621335829175-95f437384d7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVuJTIwd2VhcnxlbnwwfHwwfHx8MA%3D%3D",
        title: "Women Ethnic",
        rating1: <FaStar className='text-yellow-400 ' />,
        color: "Yello",
        price: "1200/-",
        aosDelay: "600",
    },
    {
        id: 5,
        img: "https://images.unsplash.com/photo-1621335829175-95f437384d7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVuJTIwd2VhcnxlbnwwfHwwfHx8MA%3D%3D",
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
        img: "https://images.unsplash.com/photo-1621335829175-95f437384d7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVuJTIwd2VhcnxlbnwwfHwwfHx8MA%3D%3D",
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
        img: "https://images.unsplash.com/photo-1621335829175-95f437384d7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVuJTIwd2VhcnxlbnwwfHwwfHx8MA%3D%3D",
        title: "Women Comboo",
        rating1: <FaStar className='text-yellow-400 ' />,
        color: "Black & Yello",
        price: "3000/-",
        aosDelay: "200",
    },
    {
        id: 8,
        img: "https://images.unsplash.com/photo-1621335829175-95f437384d7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVuJTIwd2VhcnxlbnwwfHwwfHx8MA%3D%3D",
        title: "Dress",
        rating1: <FaStar className='text-yellow-400 ' />,
        color: "Brown",
        price: "2100/-",
        aosDelay: "400",
    },
    {
        id: 9,
        img: "https://images.unsplash.com/photo-1621335829175-95f437384d7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVuJTIwd2VhcnxlbnwwfHwwfHx8MA%3D%3D",
        title: "Yello Dress",
        rating1: <FaStar className='text-yellow-400 ' />,
        rating2: <FaStar className='text-yellow-400 ' />,
        color: "Yello",
        price: "1000/-",
        aosDelay: "600",
    },
    {
        id: 10,
        img: "https://images.unsplash.com/photo-1621335829175-95f437384d7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVuJTIwd2VhcnxlbnwwfHwwfHx8MA%3D%3D",
        title: "Women Jeens",
        rating1: <FaStar className='text-yellow-400 ' />,
        color: "Blue",
        price: "1600/-",
        aosDelay: "800",
    },
    {
        id: 11,
        img: "https://images.unsplash.com/photo-1621335829175-95f437384d7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVuJTIwd2VhcnxlbnwwfHwwfHx8MA%3D%3D",
        title: "Women Ethnic",
        rating1: <FaStar className='text-yellow-400 ' />,
        rating2: <FaStar className='text-yellow-400 ' />,
        color: "white",
        price: "2000/-",
        aosDelay: "0",
    },
    {
        id: 12,
        img: "https://images.unsplash.com/photo-1621335829175-95f437384d7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVuJTIwd2VhcnxlbnwwfHwwfHx8MA%3D%3D",
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
        img: "https://images.unsplash.com/photo-1621335829175-95f437384d7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVuJTIwd2VhcnxlbnwwfHwwfHx8MA%3D%3D",
        title: "Goggles",
        rating1: <FaStar className='text-yellow-400 ' />,
        rating2: <FaStar className='text-yellow-400 ' />,
        color: "Brown",
        price: "2400/-",
        aosDelay: "400",
    },
    {
        id: 14,
        img: "https://images.unsplash.com/photo-1621335829175-95f437384d7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVuJTIwd2VhcnxlbnwwfHwwfHx8MA%3D%3D",
        title: "Women Ethnic",
        rating1: <FaStar className='text-yellow-400 ' />,
        color: "Yello",
        price: "1200/-",
        aosDelay: "600",
    },
    {
        id: 15,
        img: "https://images.unsplash.com/photo-1621335829175-95f437384d7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVuJTIwd2VhcnxlbnwwfHwwfHx8MA%3D%3D",
        title: "Red Dress ",
        rating1: <FaStar className='text-yellow-400 ' />,
        rating2: <FaStar className='text-yellow-400 ' />,
        color: "Black",
        price: "4000/-",
        aosDelay: "800",
    },
    {
        id: 16,
        img: "https://images.unsplash.com/photo-1621335829175-95f437384d7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVuJTIwd2VhcnxlbnwwfHwwfHx8MA%3D%3D",
        title: "Women Dress",
        rating1: <FaStar className='text-yellow-400 ' />,
        color: "LightGreen",
        price: "3500/-",
        aosDelay: "0",
    },
    {
        id: 17,
        img: "https://images.unsplash.com/photo-1621335829175-95f437384d7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVuJTIwd2VhcnxlbnwwfHwwfHx8MA%3D%3D",
        title: "Women Comboo",
        rating1: <FaStar className='text-yellow-400 ' />,
        rating2: <FaStar className='text-yellow-400 ' />,
        color: "Black & Yello",
        price: "3000/-",
        aosDelay: "200",
    },
    {
        id: 18,
        img: "https://images.unsplash.com/photo-1621335829175-95f437384d7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVuJTIwd2VhcnxlbnwwfHwwfHx8MA%3D%3D",
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
        img: "https://images.unsplash.com/photo-1621335829175-95f437384d7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVuJTIwd2VhcnxlbnwwfHwwfHx8MA%3D%3D",
        title: "Yello Dress",
        rating1: <FaStar className='text-yellow-400 ' />,
        rating2: <FaStar className='text-yellow-400 ' />,
        color: "Yello",
        price: "1000/-",
        aosDelay: "600",
    },
    {
        id: 20,
        img: "https://images.unsplash.com/photo-1621335829175-95f437384d7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVuJTIwd2VhcnxlbnwwfHwwfHx8MA%3D%3D",
        title: "Women Jeens",
        rating1: <FaStar className='text-yellow-400 ' />,
        color: "Blue",
        price: "1600/-",
        aosDelay: "800",
    },
    {
        id: 21,
        img: "https://images.unsplash.com/photo-1621335829175-95f437384d7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVuJTIwd2VhcnxlbnwwfHwwfHx8MA%3D%3D",
        title: "Women Ethnic",
        rating1: <FaStar className='text-yellow-400 ' />,
        rating2: <FaStar className='text-yellow-400 ' />,
        color: "white",
        price: "2000/-",
        aosDelay: "0",
    },
    {
        id: 22,
        img: "https://images.unsplash.com/photo-1621335829175-95f437384d7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVuJTIwd2VhcnxlbnwwfHwwfHx8MA%3D%3D",
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
        img: "https://images.unsplash.com/photo-1621335829175-95f437384d7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVuJTIwd2VhcnxlbnwwfHwwfHx8MA%3D%3D",
        title: "Goggles",
        rating1: <FaStar className='text-yellow-400 ' />,
        rating2: <FaStar className='text-yellow-400 ' />,
        color: "Brown",
        price: "2400/-",
        aosDelay: "400",
    },
    {
        id: 24,
        img: "https://images.unsplash.com/photo-1621335829175-95f437384d7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVuJTIwd2VhcnxlbnwwfHwwfHx8MA%3D%3D",
        title: "Women Ethnic",
        rating1: <FaStar className='text-yellow-400 ' />,
        color: "Yello",
        price: "1200/-",
        aosDelay: "600",
    },
    {
        id: 25,
        img: "https://images.unsplash.com/photo-1621335829175-95f437384d7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVuJTIwd2VhcnxlbnwwfHwwfHx8MA%3D%3D",
        title: "Red Dress ",
        rating1: <FaStar className='text-yellow-400 ' />,
        rating2: <FaStar className='text-yellow-400 ' />,
        color: "Black",
        price: "4000/-",
        aosDelay: "800",
    },
    {
        id: 26,
        img: "https://images.unsplash.com/photo-1621335829175-95f437384d7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVuJTIwd2VhcnxlbnwwfHwwfHx8MA%3D%3D",
        title: "Women Dress",
        rating1: <FaStar className='text-yellow-400 ' />,
        color: "LightGreen",
        price: "3500/-",
        aosDelay: "0",
    },
    {
        id: 27,
        img: "https://images.unsplash.com/photo-1621335829175-95f437384d7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVuJTIwd2VhcnxlbnwwfHwwfHx8MA%3D%3D",
        title: "Women Comboo",
        rating1: <FaStar className='text-yellow-400 ' />,
        rating2: <FaStar className='text-yellow-400 ' />,
        color: "Black & Yello",
        price: "3000/-",
        aosDelay: "200",
    },
    {
        id: 28,
        img: "https://images.unsplash.com/photo-1621335829175-95f437384d7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVuJTIwd2VhcnxlbnwwfHwwfHx8MA%3D%3D",
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
        img: "https://images.unsplash.com/photo-1621335829175-95f437384d7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVuJTIwd2VhcnxlbnwwfHwwfHx8MA%3D%3D",
        title: "Yello Dress",
        rating1: <FaStar className='text-yellow-400 ' />,
        rating2: <FaStar className='text-yellow-400 ' />,
        color: "Yello",
        price: "1000/-",
        aosDelay: "600",
    },
    {
        id: 30,
        img: "https://images.unsplash.com/photo-1621335829175-95f437384d7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVuJTIwd2VhcnxlbnwwfHwwfHx8MA%3D%3D",
        title: "Women Jeens",
        rating1: <FaStar className='text-yellow-400 ' />,
        color: "Blue",
        price: "1600/-",
        aosDelay: "800",
    },
    {
        id: 31,
        img: "https://images.unsplash.com/photo-1621335829175-95f437384d7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVuJTIwd2VhcnxlbnwwfHwwfHx8MA%3D%3D",
        title: "Women Ethnic",
        rating1: <FaStar className='text-yellow-400 ' />,
        rating2: <FaStar className='text-yellow-400 ' />,
        color: "white",
        price: "2000/-",
        aosDelay: "0",
    },
    {
        id: 32,
        img: "https://images.unsplash.com/photo-1621335829175-95f437384d7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVuJTIwd2VhcnxlbnwwfHwwfHx8MA%3D%3D",
        title: "Women western",
        rating1: <FaStar className='text-yellow-400 ' />,
        rating3: <FaStar className='text-yellow-400 ' />,
        rating4: <FaStar className='text-yellow-400 ' />,
        color: "Red",
        price: "1900/-",
        aosDelay: "200",
    },
    {
        id: 33,
        img: "https://images.unsplash.com/photo-1621335829175-95f437384d7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVuJTIwd2VhcnxlbnwwfHwwfHx8MA%3D%3D",
        title: "Goggles",
        rating1: <FaStar className='text-yellow-400 ' />,
        rating2: <FaStar className='text-yellow-400 ' />,
        color: "Brown",
        price: "2400/-",
        aosDelay: "400",
    },
    {
        id: 34,
        img: "https://images.unsplash.com/photo-1621335829175-95f437384d7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVuJTIwd2VhcnxlbnwwfHwwfHx8MA%3D%3D",
        title: "Women Ethnic",
        rating1: <FaStar className='text-yellow-400 ' />,
        color: "Yello",
        price: "1200/-",
        aosDelay: "600",
    },
    {
        id: 35,
        img: "https://images.unsplash.com/photo-1621335829175-95f437384d7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVuJTIwd2VhcnxlbnwwfHwwfHx8MA%3D%3D",
        title: "Red Dress ",
        rating1: <FaStar className='text-yellow-400 ' />,
        rating2: <FaStar className='text-yellow-400 ' />,
        color: "Black",
        price: "4000/-",
        aosDelay: "800",
    },
    {
        id: 36,
        img: "https://images.unsplash.com/photo-1621335829175-95f437384d7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVuJTIwd2VhcnxlbnwwfHwwfHx8MA%3D%3D",
        title: "Women Dress",
        rating1: <FaStar className='text-yellow-400 ' />,
        color: "LightGreen",
        price: "3500/-",
        aosDelay: "0",
    },
    {
        id: 37,
        img: "https://images.unsplash.com/photo-1621335829175-95f437384d7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVuJTIwd2VhcnxlbnwwfHwwfHx8MA%3D%3D",
        title: "Women Comboo",
        rating1: <FaStar className='text-yellow-400 ' />,
        rating2: <FaStar className='text-yellow-400 ' />,
        color: "Black & Yello",
        price: "3000/-",
        aosDelay: "200",
    },
    {
        id: 38,
        img: "https://images.unsplash.com/photo-1621335829175-95f437384d7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVuJTIwd2VhcnxlbnwwfHwwfHx8MA%3D%3D",
        title: "Dress",
        rating1: <FaStar className='text-yellow-400 ' />,
        rating4: <FaStar className='text-yellow-400 ' />,
        rating3: <FaStar className='text-yellow-400 ' />,
        color: "Brown",
        price: "2100/-",
        aosDelay: "400",
    },
    {
        id: 39,
        img: "https://images.unsplash.com/photo-1621335829175-95f437384d7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVuJTIwd2VhcnxlbnwwfHwwfHx8MA%3D%3D",
        title: "Yello Dress",
        rating1: <FaStar className='text-yellow-400 ' />,
        rating2: <FaStar className='text-yellow-400 ' />,
        color: "Yello",
        price: "1000/-",
        aosDelay: "600",
    },
    {
        id: 40,
        img: "https://images.unsplash.com/photo-1621335829175-95f437384d7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVuJTIwd2VhcnxlbnwwfHwwfHx8MA%3D%3D",
        title: "Women Jeens",
        rating1: <FaStar className='text-yellow-400 ' />,
        color: "Blue",
        price: "1600/-",
        aosDelay: "800",
    },
];


function MensWears() {
     useEffect(() => {
            AOS.init(); // Initialize AOS animations
          }, []);
         const [visibleCount, setVisibleCount] = useState(20); // Initial visible cards
        
            const handleShowMore = () => {
                setVisibleCount((prevCount) => prevCount + 20); // Increment visible cards by 5
            };
  return (
    <>
         <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
                <Navbar />
                <div className="mt-14 md-12">
                    <div className="container">
                        <div className="text-center mb-10 max-w-[600px] mx-auto">
                            <h1 data-aos="fade-up" className="text-3xl font-bold">Men's Wear</h1>
                        </div>
                        <div>
                            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
                                {ProductsData.slice(0, visibleCount).map((data) => (
                                    <div
                                        data-aos="fade-up"
                                        data-aos-delay={data.aosDelay}
                                        key={data.id}
                                        className="space-y-3"
                                    >
                                        <img
                                            src={data.img}
                                            alt="Cover image"
                                            className="h-[280px] w-[210px] object-cover rounded-md hover:-translate-y-2.5 duration-300"
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
                <Banner/>
                <Footer/>
            </div>
    </>
  )
}

export default MensWears