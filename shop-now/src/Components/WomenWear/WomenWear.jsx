import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Banner from '../Banner/Banner'
import Footer from '../Footer/Footer'
import { FaHeart, FaStar } from 'react-icons/fa6';
import AOS from "aos";
import "aos/dist/aos.css";
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
const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: "Women Ethnic",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "white",
        price: 2000,
        aosDelay: "0",
    },
    {
        id: 2,
        img: Img2,
        title: "Women western",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "Red",
        price: 1900,
        aosDelay: "200",
    },
    {
        id: 3,
        img: Img3,
        title: "Goggles",
        rating1: <FaStar className='text-yellow-400 ' />,
        color: "Brown",
        price: 2400,
        aosDelay: "400",
    },
    {
        id: 4,
        img: Img4,
        title: "Women Ethnic",
        rating1: <FaStar className='text-yellow-400 ' />,
        color: "Yello",
        price: 1200,
        aosDelay: "600",
    },
    {
        id: 5,
        img: Img5,
        title: "Red Dress ",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "Black",
        price: 4000,
        aosDelay: "800",
    },
    {
        id: 6,
        img: Img6,
        title: "Women Dress",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "LightGreen",
        price: 3500,
        aosDelay: "0",
    },
    {
        id: 7,
        img: Img7,
        title: "Women Comboo",
        rating1: <FaStar className='text-yellow-400 ' />,
        color: "Black & Yello",
        price: 3000,
        aosDelay: "200",
    },
    {
        id: 8,
        img: Img8,
        title: "Dress",
        rating1: <FaStar className='text-yellow-400 ' />,
        color: "Brown",
        price: 2100,
        aosDelay: "400",
    },
    {
        id: 9,
        img: Img9,
        title: "Yello Dress",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "Yello",
        price: 1000,
        aosDelay: "600",
    },
    {
        id: 10,
        img: Img10,
        title: "Women Jeens",
        rating1: <FaStar className='text-yellow-400 ' />,
        color: "Blue",
        price: 1600,
        aosDelay: "800",
    },
    {
        id: 11,
        img: Img11,
        title: "Women Ethnic",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "white",
        price: 2000,
        aosDelay: "0",
    },
    {
        id: 12,
        img: Img12,
        title: "Women western",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "Red",
        price: 1900,
        aosDelay: "200",
    },
    {
        id: 13,
        img: Img13,
        title: "Goggles",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "Brown",
        price: 2400,
        aosDelay: "400",
    },
    {
        id: 14,
        img: Img14,
        title: "Women Ethnic",
        rating1: <FaStar className='text-yellow-400 ' />,
        color: "Yello",
        price: 1200,
        aosDelay: "600",
    },
    {
        id: 15,
        img: Img15,
        title: "Red Dress ",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "Black",
        price: 4000,
        aosDelay: "800",
    },
    {
        id: 16,
        img: Img16,
        title: "Women Dress",
        rating1: <FaStar className='text-yellow-400 ' />,
        color: "LightGreen",
        price: 3500,
        aosDelay: "0",
    },
    {
        id: 17,
        img: Img17,
        title: "Women Comboo",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "Black & Yello",
        price: 3000,
        aosDelay: "200",
    },
    {
        id: 18,
        img: Img18,
        title: "Dress",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "Brown",
        price: 2100,
        aosDelay: "400",
    },
    {
        id: 19,
        img: Img19,
        title: "Yello Dress",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "Yello",
        price: 1000,
        aosDelay: "600",
    },
    {
        id: 20,
        img: Img20,
        title: "Women Jeens",
        rating1: <FaStar className='text-yellow-400 ' />,
        color: "Blue",
        price: 1600,
        aosDelay: "800",
    },
    {
        id: 21,
        img: Img21,
        title: "Women Ethnic",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "white",
        price: 2000,
        aosDelay: "0",
    },
    {
        id: 22,
        img: Img22,
        title: "Women western",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "Red",
        price: 1900,
        aosDelay: "200",
    },
    {
        id: 23,
        img: Img23,
        title: "Goggles",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "Brown",
        price: 2400,
        aosDelay: "400",
    },
    {
        id: 24,
        img: Img24,
        title: "Women Ethnic",
        rating1: <FaStar className='text-yellow-400 ' />,
        color: "Yello",
        price: 1200,
        aosDelay: "600",
    },
    {
        id: 25,
        img: Img25,
        title: "Red Dress ",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "Black",
        price: 4000,
        aosDelay: "800",
    },
    {
        id: 26,
        img: Img26,
        title: "Women Dress",
        rating1: <FaStar className='text-yellow-400 ' />,
        color: "LightGreen",
        price: 3500,
        aosDelay: "0",
    },
    {
        id: 27,
        img: Img27,
        title: "Women Comboo",
        rating1: <FaStar className='text-yellow-400 ' />,
        color: "Black & Yello",
        price: 3000,
        aosDelay: "200",
    },
    {
        id: 28,
        img: Img28,
        title: "Dress",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "Brown",
        price: 2100,
        aosDelay: "400",
    },
    {
        id: 29,
        img: Img29,
        title: "Yello Dress",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "Yello",
        price: 1000,
        aosDelay: "600",
    },
    {
        id: 30,
        img: Img30,
        title: "Women Jeens",
        rating1: <FaStar className='text-yellow-400 ' />,
        color: "Blue",
        price: 1600,
        aosDelay: "800",
    },
    {
        id: 31,
        img: Img30,
        title: "Women Jeens",
        rating1: <FaStar className='text-yellow-400 ' />,
        color: "Blue",
        price: 1600,
        aosDelay: "800",
    },
    {
        id: 32,
        img: Img30,
        title: "Women Jeens",
        rating1: <FaStar className='text-yellow-400 ' />,
        color: "Blue",
        price: 1600,
        aosDelay: "800",
    },
    {
        id: 33,
        img: Img30,
        title: "Women Jeens",
        rating1: <FaStar className='text-yellow-400 ' />,
        color: "Blue",
        price: 1600,
        aosDelay: "800",
    },
    {
        id: 34,
        img: Img30,
        title: "Women Jeens",
        rating1: <FaStar className='text-yellow-400 ' />,
        color: "Blue",
        price: 1600,
        aosDelay: "800",
    },
    {
        id: 35,
        img: Img30,
        title: "Women Jeens",
        rating1: <FaStar className='text-yellow-400 ' />,
        color: "Blue",
        price: 1600,
        aosDelay: "800",
    },
    {
        id: 36,
        img: Img30,
        title: "Women Jeens",
        rating1: <FaStar className='text-yellow-400 ' />,
        color: "Blue",
        price: 1600,
        aosDelay: "800",
    },
    {
        id: 37,
        img: Img30,
        title: "Women Jeens",
        rating1: <FaStar className='text-yellow-400 ' />,
        color: "Blue",
        price: 1600,
        aosDelay: "800",
    },
    {
        id: 38,
        img: Img30,
        title: "Women Jeens",
        rating1: <FaStar className='text-yellow-400 ' />,
        color: "Blue",
        price: 1600,
        aosDelay: "800",
    },
    {
        id: 39,
        img: Img30,
        title: "Women Jeens",
        rating1: <FaStar className='text-yellow-400 ' />,
        color: "Blue",
        price: 1600,
        aosDelay: "800",
    },
    {
        id: 40,
        img: Img30,
        title: "Women Jeens",
        rating1: <FaStar className='text-yellow-400 ' />,
        color: "Blue",
        price: 1600,
        aosDelay: "800",
    },
];


function WomenWear({ AddToCart }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [likedProducts, setLikedProducts] = useState({});
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
                            <h1 data-aos="fade-up" className="text-3xl mt-4 sm:mt-10 font-bold">Women's Wear</h1>
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
                                                        src={data.img}
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
                                                            <button className="border py- px-1 rounded-md  bg-lime-600 text-black sm:py-1 sm:px-3" onClick={() => AddToCart(data)}>Add to cart</button>
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
                            {
                                visibleCount < ProductsData.length && (
                                    <div className="flex justify-center">
                                        <button
                                            onClick={handleShowMore}
                                            data-aos="fade-up"
                                            className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md"
                                        >
                                            Show More
                                        </button>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
                <Banner />
                <Footer />
            </div>
        </>
    )
}

export default WomenWear