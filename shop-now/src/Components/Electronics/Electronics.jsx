import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import AOS from "aos";
import "aos/dist/aos.css";
import { FaHeart, FaStar } from 'react-icons/fa6';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';


const ProductsData = [
    {
        id: 1,
        img: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVsZWN0cm9uaWNzfGVufDB8fDB8fHww",
        title: "Electric",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "white",
        price: "2000/-",
        aosDelay: "0",
    },
    {
        id: 2,
        img: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVsZWN0cm9uaWNzfGVufDB8fDB8fHww",
        title: "Electric",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "white",
        price: "2000/-",
        aosDelay: "200",
    },
    {
        id: 3,
        img: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVsZWN0cm9uaWNzfGVufDB8fDB8fHww",
        title: "Electric",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "white",
        price: "2000/-",
        aosDelay: "400",
    },
    {
        id: 4,
        img: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVsZWN0cm9uaWNzfGVufDB8fDB8fHww",
        title: "Electric",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "white",
        price: "2000/-",
        aosDelay: "600",
    },
    {
        id: 5,
        img: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVsZWN0cm9uaWNzfGVufDB8fDB8fHww",
        title: "Electric",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "white",
        price: "2000/-",
        aosDelay: "800",
    },
    {
        id: 6,
        img: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVsZWN0cm9uaWNzfGVufDB8fDB8fHww",
        title: "Electric",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "white",
        price: "2000/-",
        aosDelay: "0",
    },
    {
        id: 7,
        img: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVsZWN0cm9uaWNzfGVufDB8fDB8fHww",
        title: "Electric",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "white",
        price: "2000/-",
        aosDelay: "200",
    },
    {
        id: 8,
        img: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVsZWN0cm9uaWNzfGVufDB8fDB8fHww",
        title: "Electric",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "white",
        price: "2000/-",
        aosDelay: "400",
    },
    {
        id: 9,
        img: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVsZWN0cm9uaWNzfGVufDB8fDB8fHww",
        title: "Electric",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "white",
        price: "2000/-",
        aosDelay: "600",
    },
    {
        id: 10,
        img: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVsZWN0cm9uaWNzfGVufDB8fDB8fHww",
        title: "Electric",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "white",
        price: "2000/-",
        aosDelay: "800",
    },
    {
        id: 11,
        img: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVsZWN0cm9uaWNzfGVufDB8fDB8fHww",
        title: "Electric",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "white",
        price: "2000/-",
        aosDelay: "0",
    },
    {
        id: 12,
        img: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVsZWN0cm9uaWNzfGVufDB8fDB8fHww",
        title: "Electric",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "white",
        price: "2000/-",
        aosDelay: "200",
    },
    {
        id: 13,
        img: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVsZWN0cm9uaWNzfGVufDB8fDB8fHww",
        title: "Electric",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "white",
        price: "2000/-",
        aosDelay: "400",
    },
    {
        id: 14,
        img: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVsZWN0cm9uaWNzfGVufDB8fDB8fHww",
        title: "Electric",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "white",
        price: "2000/-",
        aosDelay: "600",
    },
    {
        id: 15,
        img: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVsZWN0cm9uaWNzfGVufDB8fDB8fHww",
        title: "Electric",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "white",
        price: "2000/-",
        aosDelay: "800",
    },
    {
        id: 16,
        img: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVsZWN0cm9uaWNzfGVufDB8fDB8fHww",
        title: "Electric",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "white",
        price: "2000/-",
        aosDelay: "0",
    },
    {
        id: 17,
        img: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVsZWN0cm9uaWNzfGVufDB8fDB8fHww",
        title: "Electric",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "white",
        price: "2000/-",
        aosDelay: "200",
    },
    {
        id: 18,
        img: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVsZWN0cm9uaWNzfGVufDB8fDB8fHww",
        title: "Electric",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "white",
        price: "2000/-",
        aosDelay: "400",
    },
    {
        id: 19,
        img: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVsZWN0cm9uaWNzfGVufDB8fDB8fHww",
        title: "Electric",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "white",
        price: "2000/-",
        aosDelay: "600",
    },
    {
        id: 20,
        img: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVsZWN0cm9uaWNzfGVufDB8fDB8fHww",
        title: "Electric",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "white",
        price: "2000/-",
        aosDelay: "800",
    },
    {
        id: 21,
        img: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVsZWN0cm9uaWNzfGVufDB8fDB8fHww",
        title: "Electric",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "white",
        price: "2000/-",
        aosDelay: "0",
    },
    {
        id: 22,
        img: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVsZWN0cm9uaWNzfGVufDB8fDB8fHww",
        title: "Electric",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "white",
        price: "2000/-",
        aosDelay: "200",
    },
    {
        id: 23,
        img: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVsZWN0cm9uaWNzfGVufDB8fDB8fHww",
        title: "Electric",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "white",
        price: "2000/-",
        aosDelay: "400",
    },
    {
        id: 24,
        img: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVsZWN0cm9uaWNzfGVufDB8fDB8fHww",
        title: "Electric",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "white",
        price: "2000/-",
        aosDelay: "600",
    },
    {
        id: 25,
        img: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVsZWN0cm9uaWNzfGVufDB8fDB8fHww",
        title: "Electric",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "white",
        price: "2000/-",
        aosDelay: "800",
    },
    {
        id: 26,
        img: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVsZWN0cm9uaWNzfGVufDB8fDB8fHww",
        title: "Electric",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "white",
        price: "2000/-",
        aosDelay: "0",
    },
    {
        id: 27,
        img: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVsZWN0cm9uaWNzfGVufDB8fDB8fHww",
        title: "Electric",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "white",
        price: "2000/-",
        aosDelay: "200",
    },
    {
        id: 28,
        img: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVsZWN0cm9uaWNzfGVufDB8fDB8fHww",
        title: "Electric",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "white",
        price: "2000/-",
        aosDelay: "400",
    },
    {
        id: 29,
        img: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVsZWN0cm9uaWNzfGVufDB8fDB8fHww",
        title: "Electric",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "white",
        price: "2000/-",
        aosDelay: "600",
    },
    {
        id: 30,
        img: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVsZWN0cm9uaWNzfGVufDB8fDB8fHww",
        title: "Electric",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "white",
        price: "2000/-",
        aosDelay: "800",
    },
    {
        id: 31,
        img: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVsZWN0cm9uaWNzfGVufDB8fDB8fHww",
        title: "Electric",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "white",
        price: "2000/-",
        aosDelay: "0",
    },
    {
        id: 32,
        img: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVsZWN0cm9uaWNzfGVufDB8fDB8fHww",
        title: "Electric",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "white",
        price: "2000/-",
        aosDelay: "200",
    },
    {
        id: 33,
        img: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVsZWN0cm9uaWNzfGVufDB8fDB8fHww",
        title: "Electric",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "white",
        price: "2000/-",
        aosDelay: "400",
    },
    {
        id: 34,
        img: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVsZWN0cm9uaWNzfGVufDB8fDB8fHww",
        title: "Electric",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "white",
        price: "2000/-",
        aosDelay: "600",
    },
    {
        id: 35,
        img: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVsZWN0cm9uaWNzfGVufDB8fDB8fHww",
        title: "Electric",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "white",
        price: "2000/-",
        aosDelay: "800",
    },
    {
        id: 36,
        img: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVsZWN0cm9uaWNzfGVufDB8fDB8fHww",
        title: "Electric",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "white",
        price: "2000/-",
        aosDelay: "0",
    },
    {
        id: 37,
        img: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVsZWN0cm9uaWNzfGVufDB8fDB8fHww",
        title: "Electric",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "white",
        price: "2000/-",
        aosDelay: "200",
    },
    {
        id: 38,
        img: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVsZWN0cm9uaWNzfGVufDB8fDB8fHww",
        title: "Electric",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "white",
        price: "2000/-",
        aosDelay: "400",
    },
    {
        id: 39,
        img: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVsZWN0cm9uaWNzfGVufDB8fDB8fHww",
        title: "Electric",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "white",
        price: "2000/-",
        aosDelay: "600",
    },
    {
        id: 40,
        img: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVsZWN0cm9uaWNzfGVufDB8fDB8fHww",
        title: "Electric",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "white",
        price: "2000/-",
        aosDelay: "800",
    },

];

function Electronics() {
    const [imageUrl, setImageUrl] = useState("");
    const [likedProducts, setLikedProducts] = useState({});

    useEffect(() => {
        const randomNum = Math.floor(Math.random() * 1000); // Generates a random number
        setImageUrl(`https://picsum.photos/300/200?random=${randomNum}`);
    }, []);

    const [searchTerm, setSearchTerm] = useState("");
    const [filteredProductsData, setFilteredProductsData] = useState(ProductsData);

    const handleSearch = () => {
        const filtered = ProductsData.filter((product) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.price.toString().includes(searchTerm) // No need for `.toLowerCase()`
        );
        setFilteredProductsData(filtered);
    };


    useEffect(() => {
        AOS.init(); // Initialize AOS animations
    }, []);
    const [visibleCount, setVisibleCount] = useState(20); // Initial visible cards

    const handleShowMore = () => {
        setVisibleCount((prevCount) => prevCount + 20); // Increment visible cards by 5
    };

    const toggleLike = (id) => {
        setLikedProducts((prev) => ({ ...prev, [id]: !prev[id] }));
    };
    return (
        <>
            <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
                <Navbar />
                <div className="mt-4 sm:mt-12 md-12">
                    <div className="container">
                        <div className="text-center mb-10 max-w-[600px] mx-auto">
                            <input
                                data-aos="fade-up"
                                type="text"
                                placeholder="Search products..."
                                className='w-[100%] sm:w-[400px] group-hover:w-[700px] transition-all duration-300 rounded-lg border border-gray-300 py-3 px-3 text-lg focus:outline-none focus:border-primary dark:border-gray-500 dark:bg-slate-800'
                                value={searchTerm}
                                onChange={(e) => {
                                    setSearchTerm(e.target.value);
                                    handleSearch(); // Calls search function on every input change
                                }}
                            />
                            <h1 data-aos="fade-up" className="text-3xl mt-4 sm:mt-10 font-bold">Electronics</h1>
                        </div>
                        <div>
                            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
                                {filteredProductsData.slice(0, visibleCount).length > 0 ? (
                                    filteredProductsData.slice(0, visibleCount).map((data) => (
                                        <div>
                                            <div
                                                data-aos="fade-up"
                                                data-aos-delay={data.aosDelay}
                                                key={data.id}
                                                className="space-y-3"
                                            >
                                                <div key={data.id} className="relative hover:-translate-y-1.5 duration-300">
                                                    {/* Heart Icon for Liking */}
                                                    <FaHeart
                                                        className={`absolute top-2 right-2 text-2xl cursor-pointer z-10  ${likedProducts[data.id] ? "text-red-500" : "text-gray-400"
                                                            }`}
                                                        onClick={() => toggleLike(data.id)}
                                                    />
                                                    <img
                                                        src={imageUrl}
                                                        alt="Cover image"
                                                        className="h-[170px] w-[210px] object-cover rounded-md sm:h-[280px] sm:w-[210px]"
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
                                                        </p>
                                                        <div className="flex justify-between mt-2">
                                                            <button className="border py-0 px-1 rounded-md bg-lime-600 text-black sm:py-1 sm:px-3">Buy now</button>
                                                            <button className="border py- px-1 rounded-md  bg-lime-600 text-black sm:py-1 sm:px-3">Add to cart</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p>No products found</p>
                                )}
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
                <Banner />
                <Footer />
            </div>
        </>
    )
}

export default Electronics