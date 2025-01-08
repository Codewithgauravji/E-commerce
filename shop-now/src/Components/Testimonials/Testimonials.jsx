import React from 'react'
import Slider from 'react-slick'

const TestomonialsData = [
    {
        id: 1,
        name: "Gaurav",
        text: "Highly professional and responsive. Amazing experience. This service exceeded all my expectations Fantastic results. I couldn’t be happier Outstanding service! They went above and beyond I am incredibly impressed with the results!",
        img: "https://th.bing.com/th?id=OIP.NqY3rNMnx2NXYo3KJfg43gHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
    },
    {
        id: 2,
        name: "Suhal",
        text: "Highly professional and responsive. Amazing experience. This service exceeded all my expectations Fantastic results. I couldn’t be happier Outstanding service! They went above and beyond I am incredibly impressed with the results!",
        img: "https://th.bing.com/th?id=OIP.NqY3rNMnx2NXYo3KJfg43gHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
    },
    {
        id: 3,
        name: "Ankit",
        text: "Highly professional and responsive. Amazing experience. This service exceeded all my expectations Fantastic results. I couldn’t be happier Outstanding service! They went above and beyond I am incredibly impressed with the results!",
        img: "https://th.bing.com/th?id=OIP.NqY3rNMnx2NXYo3KJfg43gHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
    },
    {
        id: 4,
        name: "Ateek",
        text: "Highly professional and responsive. Amazing experience. This service exceeded all my expectations Fantastic results. I couldn’t be happier Outstanding service! They went above and beyond I am incredibly impressed with the results!",
        img: "https://th.bing.com/th?id=OIP.NqY3rNMnx2NXYo3KJfg43gHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
    },
    {
        id: 5,
        name: "Arpit",
        text: "Highly professional and responsive. Amazing experience. This service exceeded all my expectations Fantastic results. I couldn’t be happier Outstanding service! They went above and beyond I am incredibly impressed with the results!",
        img: "https://th.bing.com/th?id=OIP.NqY3rNMnx2NXYo3KJfg43gHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
    },
]
const Testimonials = () => {

    var settings = {
        dots: true,
        arrow: false,
        infinite: true,
        speed: 500,
        slideToscroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slideToShow: 3,
                    slideToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slideToShow: 2,
                    slideToScroll: 1,
                    initialSlider: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slideToShow: 1,
                    slideToScroll: 1,
                }
            }
        ]
    }
    return (
        <div className='py-10 mb-10'>
            <div className='container'>
                <div className='text-center md-10 max-w-[600px] mx-auto'>
                    <p data-aos="fade-up" className='text-sm text-primary '>Testomonials</p>
                    <h1 data-aos="fade-up" className='text-3xl font-bold '> What our customers are saying</h1>
                    <p data-aos="fade-up" className='text-xs text-gray-400'>A testimonial is a short statement expressing personal experience or endorsement, highlighting satisfaction and support for a product or service.</p>
                </div>
                <div data-aos="zoom-in" >
                    <Slider {...settings}>
                        {TestomonialsData.map((data) => (
                            <div className='m-6'>
                                <div key={data.id} className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-slate-600 bg-primary/10 relative'>
                                    <div className='md-4'>
                                        <img src={data.img} alt="" className='rounded-full w-20 h-20' />
                                    </div>
                                    <div className='flex flex-col items-center gap-4'>
                                        <div className='space-y-3'>
                                            <p className='text-xs dark:text-slate-300 text-gray-500'>{data.text}</p>
                                            <h1 className='text-xl font-bold dark:text-slate-300 text-black/80 dark:text-light'>{data.name}</h1>
                                        </div>
                                    </div>
                                    <p className='text-black/20 text-9xl font-serif absolute top-0 right-0'></p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Testimonials