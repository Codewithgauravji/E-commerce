import React from 'react'
import { FiShoppingBag, FiVoicemail } from 'react-icons/fi'
import { FaFile, FaFileArrowDown, FaFolder, FaMapLocationDot, FaVoicemail, FaWhatsapp } from 'react-icons/fa6'
import { FaFacebook } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa6'
import { FaLinkedin } from 'react-icons/fa6'
// import { FaLocationArrow } from 'react-icons/fa6'
// import { FaMobileAlt } from 'react-icons/fa'
import { IoCall } from 'react-icons/io5'
import { FaGlassMartiniAlt } from 'react-icons/fa'

const FooterLinks = [
    {
        title: "Home",
        link: "/#",
    },
    {
        title: "About",
        link: "/#about",
    },
    {
        title: "Contect",
        link: "/#contect",
    },
    {
        title: "Blog",
        link: "/#blog",
    }
]
const Footer = () => {
    return (
        <div className='text-white bg-[#212529] '>
            <div className='container'>
                <div data-aos="zoom-in" className='grid md:grid-cols-3 pb-44 pt-5'>
                    <div className='py-8 px-4 '>
                        <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-1'>
                            <FiShoppingBag size="30" />
                            ShopMe
                        </h1>
                        <p>It's the buying and selling of goods and services over the internet. It allows businesses and consumers to conduct transactions online, through various platforms and websites.</p>
                    </div>
                    <div>
                        <div className='py-8 px-4'>
                            <h1 className='sm:text-xl text-xl font-bold sm:text-left text-justify mb-3'>Important Links</h1>
                            <ul className='flex flex-col gap-3'>
                                {FooterLinks.map((link) => (
                                    <li className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200' key={link.title}>{link.title}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className='py-8 px-4'>
                            <h1 className='sm:text-xl text-xl font-bold sm:text-left text-justify mb-3'>Links</h1>
                            <ul className='flex flex-col gap-3'>
                                {FooterLinks.map((link) => (
                                    <li className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200' key={link.title}>{link.title}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className='flex items-center gap-3 mt-6'>
                            <a href="https://www.instagram.com/dev_gaurav_yadav_?igsh=MXQwcTAwZG81OHR4Zw==">
                                <FaInstagram  className='text-3xl'/>
                            </a>
                            <a href="https://www.linkedin.com/in/gaurav-yadav-3b67a828a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                                <FaLinkedin  className='text-3xl'/>
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=100009265302340&mibextid=ZbWKwL">
                                <FaFacebook  className='text-3xl'/>
                            </a>
                            <a href="https://wa.me/918979162288">
                                <FaWhatsapp  className='text-3xl'/>
                            </a>
                        </div>
                        <div className='mt-6 '>
                            <div className='flex items-center gap-3'>
                                <FaMapLocationDot />
                                <p>Bareilly, Uttar Pradesh</p>
                            </div>
                            <div className='flex items-center gap-3 mt-3'>
                                <IoCall/>
                                <p>+91 8979162288</p>
                            </div>
                            <div className='flex items-center gap-3 mt-3'>
                                <FaVoicemail/>
                                <p>gy063355@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer