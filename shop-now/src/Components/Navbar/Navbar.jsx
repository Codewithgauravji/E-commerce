import React, { useState } from 'react';
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown, FaBars, FaTimes } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import DarkMode from './DarkMode';

const Menu = [
    {
        id: 1,
        name: "Home",
        link: "/",
    },
    {
        id: 2,
        name: "Top Rated",
        link: "/toprated",
    },
    {
        id: 3,
        name: "Kids Wear",
        link: "/kidswear",
    },
    {
        id: 4,
        name: "Mens Wear",
        link: "/Manswear",
    },
    {
        id: 5,
        name: "Electronics",
        link: "/electronics",
    },
];

const Dropdownlist = [
    {
        id: 1,
        name: "Trending Products",
        link: "/#"
    },
    {
        id: 2,
        name: "Best Selling",
        link: "/#"
    }
];

const Navbar = ({ handleOderPopup }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className='shadow-md bg-white dark:bg-slate-800 transition-all duration-200 relative z-40'>
            {/* Top Bar */}
            <div className='bg-primary/40 py-2'>
                <div className='container flex justify-between items-center px-4'>
                    <div>
                        <a href="#" className='font-bold text-xl flex items-center gap-1'>
                            <FiShoppingBag size="30" />
                            ShopMe
                        </a>
                    </div>
                    <div className='flex items-center gap-4'>
                        {/* Search */}
                        <div className='relative hidden sm:block'>
                            <input
                                type="text"
                                placeholder='Search'
                                className='w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-lg border border-gray-300 py-1 px-2 text-sm focus:outline-none focus:border-primary dark:border-gray-500 dark:bg-slate-800'
                            />
                            <IoMdSearch className='text-slate-800 dark:text-white absolute top-1/2 -translate-y-1/2 right-3' />
                        </div>
                        {/* Order Button */}
                        <button
                            onClick={() => handleOderPopup()}
                            className='bg-gradient-to-t from-primary to-secondary text-white py-1 px-4 rounded-full flex items-center gap-3 group'
                        >
                            <span className='hidden sm:block group-hover:block transition-all duration-200'>Order</span>
                            <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
                        </button>
                        {/* Dark Mode Toggle */}
                        <DarkMode />
                        {/* Hamburger Menu */}
                        <div className='sm:hidden block'>
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className='text-xl text-black dark:text-white'
                            >
                                {isMenuOpen ? <FaTimes /> : <FaBars />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Main Menu */}
            <div className={`sm:flex ${isMenuOpen ? "block" : "hidden"} sm:block bg-white dark:bg-slate-800 transition-all duration-200 justify-center`}>
                <ul className='flex flex-col sm:flex-row items-center gap-4 px-4 py-2 '>
                    {Menu.map((item) => (
                        <li key={item.id}>
                            <a
                                href={item.link}
                                className='block px-4 py-2 text-black dark:text-white hover:text-primary transition duration-200'
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                    {/* Dropdown */}
                    <li className='relative group'>
                        <a
                            href="#"
                            className='flex items-center gap-[2px] px-4 py-2 text-black dark:text-white hover:text-primary'
                        >
                            Trending Products <FaCaretDown className='ml-1 group-hover:rotate-180 transition duration-200' />
                        </a>
                        <div className='absolute hidden group-hover:block bg-white dark:bg-slate-800 text-black dark:text-white rounded-md shadow-lg w-[200px] py-2'>
                            <ul>
                                {Dropdownlist.map((item) => (
                                    <li key={item.id}>
                                        <a
                                            href={item.link}
                                            className='block px-4 py-2 hover:bg-primary/20'
                                        >
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
