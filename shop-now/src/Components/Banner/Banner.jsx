import React from 'react'
import BannerImg from '../../assets/Banner.jpeg'
import { GrSecure } from 'react-icons/gr'
import { IoFastFood } from 'react-icons/io5'
import { GiFoodTruck } from 'react-icons/gi'
const Banner = () => {
    return (
        <div className='min-h-[550px] flex justify-center items-center py-12 sm:py-0'>
            <div className='container'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-center'>
                    <div data-aos="zoom-in">
                        <img className='max-w-[400px h-[350px] w-full object-cover mx-auto]' src={BannerImg} alt="banner" />
                    </div>
                    <div className='flex flex-col gap-6 justify-center sm:pt-0 '>
                        <h1 data-aos="fade-up" className='text-3xl sm:text-4xl font-bold'>Winter Sale upto 50% off</h1>
                        <p data-aos="fade-up" className='text-sm text-gray-500 tracking-wide loading-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus doloremque esse veritatis quam, neque, corrupti odit hic est nam illo dicta sint aperiam sit porro? Voluptate quibusdam mollitia amet! Nam, sequi fugit.</p>
                        <div className='flex-cold gap-4 flex'>
                            <div data-aos="fade-up" className='flex items-center gap-4'>
                                <GrSecure className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-200 dark:bg-violet-400 ' />
                                <p>Quality Products</p>
                            </div>
                            <div data-aos="fade-up" className='flex items-center gap-4'>
                                <IoFastFood className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-200 dark:bg-orange-400 ' />
                                <p>Fast Delivery</p>
                            </div>
                        </div>
                        <div className='flex-cold gap-9 flex'>
                            <div data-aos="fade-up" className='flex items-center gap-4'>
                                <GiFoodTruck className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-200 dark:bg-orange-400 ' />
                                <p>Easy Payment </p>
                            </div>
                            <div data-aos="fade-up" className='flex items-center gap-4'>
                                <GiFoodTruck className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-200 dark:bg-orange-400 ' />
                                <p>Get Offers </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner