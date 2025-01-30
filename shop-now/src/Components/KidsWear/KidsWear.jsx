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
        img: "https://media.istockphoto.com/id/1250601244/photo/two-children-with-red-lanterns.jpg?s=612x612&w=0&k=20&c=ZbdfA-OYz1QhTxbTcS4cmdBStmTk2aLQKjH4B9_gtX4=",
        title: "Women Ethnic",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "white",
        price: "2000/-",
        aosDelay: "0",
    },
    {
        id: 2,
        img: "https://media.istockphoto.com/id/1830935853/photo/christmas-indoor-shoot-kids-wear-santa-dress.jpg?s=612x612&w=0&k=20&c=zpdJsxfyvlv2j86A_7f8sim0UHkzUs4mFI-sMvh_gYY=",
        title: "Women western",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "Red",
        price: "1900/-",
        aosDelay: "200",
    },
    {
        id: 3,
        img: "https://media.istockphoto.com/id/1170192944/photo/cheerful-superhero-spreading-cape.jpg?s=612x612&w=0&k=20&c=GzQBb52eoZ0w3RkH4XrEOvV6fkgVJZ9kskmj9-jOkXg=",
        title: "Styles Goggles",
        rating1: <FaStar className='text-yellow-400 ' />,
        color: "Brown",
        price: "2400/-",
        aosDelay: "400",
    },
    {
        id: 4,
        img: "https://media.istockphoto.com/id/1417646313/photo/cheerful-ethnic-boy-jumping-with-umbrella.jpg?s=612x612&w=0&k=20&c=HgYpDnYjnc9pFLM5BL-oj52dpbmOxJFViqQWWFcTAXw=",
        title: "Women Ethnic",
        rating1: <FaStar className='text-yellow-400 ' />,
        color: "Yello",
        price: "1200/-",
        aosDelay: "600",
    },
    {
        id: 5,
        img: "https://media.istockphoto.com/id/1359248146/photo/cheerful-kid-in-elegant-suit-showing-thumbs-up.jpg?s=612x612&w=0&k=20&c=CDVN1DvxqHhLkkiYeOfpU140-c4BCeEGhMMlhF17jps=",
        title: "Red Dress ",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "Black",
        price: "4000/-",
        aosDelay: "800",
    },
    {
        id: 6,
        img: "https://media.istockphoto.com/id/1359248159/photo/funny-schoolboy-pointing-up-and-smiling.jpg?s=612x612&w=0&k=20&c=S5XbaLhcKnnKbzEOhq_UVQTRu2ealOOZC_lKJTtHeeY=",
        title: "Women Dress",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "LightGreen",
        price: "3500/-",
        aosDelay: "0",
    },
    {
        id: 7,
        img: "https://media.istockphoto.com/id/1359248176/photo/positive-trendy-boy-sitting-on-chair.jpg?s=612x612&w=0&k=20&c=AMJQjNnqfuMjHYGDu-v_U7SOkINYnLCU8lJ8lhmNrEY=",
        title: "Women Comboo",
        rating1: <FaStar className='text-yellow-400 ' />,
        color: "Black & Yello",
        price: "3000/-",
        aosDelay: "200",
    },
    {
        id: 8,
        img: "https://media.istockphoto.com/id/91045910/photo/worn-out.jpg?s=612x612&w=0&k=20&c=jmcKOfEcVUU5fdMvDT_S7DPh9NQNXkECmjANtdVnIWM=",
        title: "Girl Dress ",
        rating1: <FaStar className='text-yellow-400 ' />,
        color: "Brown",
        price: "2100/-",
        aosDelay: "400",
    },
    {
        id: 9,
        img: "https://media.istockphoto.com/id/172714847/photo/little-boy-on-with-red-background.jpg?s=612x612&w=0&k=20&c=P5uOANH2ENi92mw6sU-RnQZUOgkUG6qUs9zQBsCNXeY=",
        title: "Yello Dress",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "Yello",
        price: "1000/-",
        aosDelay: "600",
    },
    {
        id: 10,
        img: "https://media.istockphoto.com/id/1300261846/photo/handsome-boy-in-a-red-shirt-and-jeans-on-a-gray-background-a-child-in-the-modeling-business.jpg?s=612x612&w=0&k=20&c=1AgPtz7F9pY_6EOX-42bbqBDFA0cXoKu9-w3VSwNVw8=",
        title: "Women Jeens",
        rating1: <FaStar className='text-yellow-400 ' />,
        color: "Blue",
        price: "1600/-",
        aosDelay: "800",
    },
    {
        id: 11,
        img: "https://media.istockphoto.com/id/1199568470/photo/women-fashion-loose-jeans-on-blue-surface-top-view.jpg?s=612x612&w=0&k=20&c=1Ge2shC8XeOtpdMAD2VcBhTOGVAq6IkzZNkdcHjsP3o=",
        title: "Women Ethnic",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "white",
        price: "2000/-",
        aosDelay: "0",
    },
    {
        id: 12,
        img: "https://media.istockphoto.com/id/1299526599/photo/fancifully-folded-mens-jeans-on-a-light-and-dark-blue-background.jpg?s=612x612&w=0&k=20&c=7Ao6mp-EoNYO6wHnjJr6P0sWow-bryYRKN0xag99ygQ=",
        title: "Women western",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "Red",
        price: "1900/-",
        aosDelay: "200",
    },
    {
        id: 13,
        img: "https://media.istockphoto.com/id/1256472764/photo/sport-inspired-flatlay-with-denim-shorts.jpg?s=612x612&w=0&k=20&c=MtQ5IiMr4uyuIpzepeCTNXqbQvPaMFLEtzKaMfs61fQ=",
        title: " Styles Goggles",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "Brown",
        price: "2400/-",
        aosDelay: "400",
    },
    {
        id: 14,
        img: "https://media.istockphoto.com/id/1173058178/photo/neatly-stacked-on-a-blue-background-of-womens-jeans-flat-lay.jpg?s=612x612&w=0&k=20&c=nTpMvHsDhGZKsvC2AvdV-OtUe2PrTTPAAiC33mDPXmo=",
        title: "Women Ethnic",
        rating1: <FaStar className='text-yellow-400 ' />,
        color: "Yello",
        price: "1200/-",
        aosDelay: "600",
    },
    {
        id: 15,
        img: "https://media.istockphoto.com/id/1204009732/photo/baby-sneakers.jpg?s=612x612&w=0&k=20&c=NZS-R7fOmKEwQmK6nU99GxZoha_kxcjNTrxVdQzNqdo=",
        title: "Red Dress ",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "Black",
        price: "4000/-",
        aosDelay: "800",
    },
    {
        id: 16,
        img: "https://media.istockphoto.com/id/485060524/photo/legs-in-pink-sneakers-on-blue-background.jpg?s=612x612&w=0&k=20&c=0GQFyBWViMtAhGyAXvxSY1JS-d1_qzf_ERIsAzXPXaE=",
        title: "Women Dress",
        rating1: <FaStar className='text-yellow-400 ' />,
        color: "LightGreen",
        price: "3500/-",
        aosDelay: "0",
    },
    {
        id: 17,
        img: "https://media.istockphoto.com/id/1309880469/photo/female-hand-hold-red-gumshoes-on-pink-background.jpg?s=612x612&w=0&k=20&c=XKS1XwQPxgA0HezXvxPHHDdPzeWBegR7eSadAy3drrM=",
        title: "Women Comboo",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "Black & Yello",
        price: "3000/-",
        aosDelay: "200",
    },
    {
        id: 18,
        img: "https://media.istockphoto.com/id/1457154043/photo/a-womans-hand-holds-a-retro-80s-yellow-rubber-sneaker-on-a-yellow-background.jpg?s=612x612&w=0&k=20&c=kKj8bS0IatVBrqR8lrWONoP2I__48TEFpMKK-xjUB_M=",
        title: "Boy Dress",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "Brown",
        price: "2100/-",
        aosDelay: "400",
    },
    {
        id: 19,
        img: "https://media.istockphoto.com/id/1296361252/photo/child-boy-modern-stock-photo.jpg?s=612x612&w=0&k=20&c=cXbTqHoULAbq_cWtWQyC4nArlBVR0VqN-txecZ5cJbA=",
        title: "Yello Dress",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "Yello",
        price: "1000/-",
        aosDelay: "600",
    },
    {
        id: 20,
        img: "https://media.istockphoto.com/id/1147286234/photo/closeup-portrait-of-a-cheerful-little-girl-in-jacket-and-knitted-hat-over-yellow-background.jpg?s=612x612&w=0&k=20&c=NgH0vAMx78DRpTkz-HOrrvNz1hWyj1cB97iWs0tOKHw=",
        title: "Women Jeens",
        rating1: <FaStar className='text-yellow-400 ' />,
        color: "Blue",
        price: "1600/-",
        aosDelay: "800",
    },
    {
        id: 21,
        img: "https://media.istockphoto.com/id/1175399769/photo/autumn-and-winter-concept-portrait-of-a-cute-little-girl-in-a-jacket-scarf-and-hat-on-a.jpg?s=612x612&w=0&k=20&c=xAtkG7tHOUXyKuzV8P2YSRmOuHFU6L7D1Lg1gkd8Hq8=",
        title: "Women Ethnic",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "white",
        price: "2000/-",
        aosDelay: "0",
    },
    {
        id: 22,
        img: "https://media.istockphoto.com/id/1179964062/photo/girl-in-hat-pink-scarf-black-jacket-on-orange-background.jpg?s=612x612&w=0&k=20&c=1P2yobMctJ7_V5MB4BGIoZtV_OZdkZFnt6wXdzWw10g=",
        title: "Women western",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "Red",
        price: "1900/-",
        aosDelay: "200",
    },
    {
        id: 23,
        img: "https://media.istockphoto.com/id/1354852797/photo/female-fashion-model-teen-girl-in-down-coat-portrait-of-child-wearing-warm-clothes.jpg?s=612x612&w=0&k=20&c=PfFhyKcGKffC_YG-Lhn6BS3WsJjzhboB5qOp8FHScmU=",
        title: "Black Goggles",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "Brown",
        price: "2400/-",
        aosDelay: "400",
    },
    {
        id: 24,
        img: "https://media.istockphoto.com/id/1287402285/photo/little-girl-wearing-warm-winter-hat-and-scarf.jpg?s=612x612&w=0&k=20&c=meg4IZK07LKY0Svv1NaEDJ290NDSNcxLp_v2ZlkaZzA=",
        title: "Women Ethnic",
        rating1: <FaStar className='text-yellow-400 ' />,
        color: "Yello",
        price: "1200/-",
        aosDelay: "600",
    },
    {
        id: 25,
        img: "https://media.istockphoto.com/id/1301832843/photo/blonde-kid-child-girl-is-dressed-in-a-warm-sweater-scarf-and-beanie-on-a-pink-background.jpg?s=612x612&w=0&k=20&c=WMitibYenKS_ogqi_JjFfTjWKS6ajkdX2XGtwOM6_6A=",
        title: "Red Dress ",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "Black",
        price: "4000/-",
        aosDelay: "800",
    },
    {
        id: 26,
        img: "https://media.istockphoto.com/id/1220783501/photo/portrait-of-pretty-female-high-school-student.jpg?s=612x612&w=0&k=20&c=YI_OB6RhQOa2aCuqEgikQA4NiBnzwn9ZbIVT7tPeGA8=",
        title: "Women Dress",
        rating1: <FaStar className='text-yellow-400 ' />,
        color: "LightGreen",
        price: "3500/-",
        aosDelay: "0",
    },
    {
        id: 27,
        img: "https://media.istockphoto.com/id/1280937844/photo/best-adventure-travel-experience-happy-child-make-yes-gesture-little-girl-with-backpack-in.jpg?s=612x612&w=0&k=20&c=yVpbmnMIHI0OkbazdQAE1qO0hO0JaSRAq_OKvEF_MAM=",
        title: "Women Comboo",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "Black & Yello",
        price: "3000/-",
        aosDelay: "200",
    },
    {
        id: 28,
        img: "https://media.istockphoto.com/id/871273862/photo/little-cute-girl-feeling-cold.jpg?s=612x612&w=0&k=20&c=Hbz7Rip6-Hr4fxwUDSTj49St-O3BXUKUIIrK9zJlWNs=",
        title: "Formal Dress",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "Brown",
        price: "2100/-",
        aosDelay: "400",
    },
    {
        id: 29,
        img: "https://media.istockphoto.com/id/1352734402/photo/teen-girl-in-knitted-winter-hat-wear-scarf-on-red-background-cold-weather.jpg?s=612x612&w=0&k=20&c=YtrP6Sff8knyj7Mu-CAS35KsyFsLitibf1L-RyTN7Os=",
        title: "Yello Dress",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "Yello",
        price: "1000/-",
        aosDelay: "600",
    },
    {
        id: 30,
        img: "https://media.istockphoto.com/id/492623580/photo/winter-child.jpg?s=612x612&w=0&k=20&c=pOUfvNJe7_KrYZcFjP5TAsjSMzxqold7vKjuQ55hJr0=",
        title: "Women Jeens",
        rating1: <FaStar className='text-yellow-400 ' />,
        color: "Blue",
        price: "1600/-",
        aosDelay: "800",
    },
    {
        id: 31,
        img: "https://media.istockphoto.com/id/1740699307/photo/photo-of-young-girl-brown-hair-ponytails-wear-sportive-green-sweatshirt-posing-for-kids-store.jpg?s=612x612&w=0&k=20&c=jZIHPgD4CDY4mBx11EWDiV4nErC1aQ3X8a73rhjY8TQ=",
        title: "Women Ethnic",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "white",
        price: "2000/-",
        aosDelay: "0",
    },
    {
        id: 32,
        img: "https://media.istockphoto.com/id/1356594828/photo/little-skater-in-stylish-clothes.jpg?s=612x612&w=0&k=20&c=QMwyVsucA_vGhhE0JbiXYFBv6Fh7wt3S2jlaPUhQFW0=",
        title: "Women western",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "Red",
        price: "1900/-",
        aosDelay: "200",
    },
    {
        id: 33,
        img: "https://media.istockphoto.com/id/1180369198/photo/winter-portrait-of-happy-children.jpg?s=612x612&w=0&k=20&c=XIPGl3abW8We99MgURR0S1HDu_iYCpajdP50HTnfmhk=",
        title: "Red Goggles",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "Brown",
        price: "2400/-",
        aosDelay: "400",
    },
    {
        id: 34,
        img: "https://media.istockphoto.com/id/1325964515/photo/kid-smiling-while-holding-hands-in-pockets-isolated-over-blue-background.jpg?s=612x612&w=0&k=20&c=5qjYPFuWUq1LNV8mnwBWUpYbaLrA97NPDDuVbWAktYw=",
        title: "Women Ethnic",
        rating1: <FaStar className='text-yellow-400 ' />,
        color: "Yello",
        price: "1200/-",
        aosDelay: "600",
    },
    {
        id: 35,
        img: "https://media.istockphoto.com/id/1223018484/photo/6-7-years-old-confident-cute-child-portrait-on-gray-background.jpg?s=612x612&w=0&k=20&c=q7CMA_9zGUaRlJwpLdDtjXXKEg1Fzv_NX8lNaTVXagc=",
        title: "Red Dress ",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "Black",
        price: "4000/-",
        aosDelay: "800",
    },
    {
        id: 36,
        img: "https://media.istockphoto.com/id/859752570/photo/winter-child-boy-drink-tea-or-coffee-winter-clothes-sweater-hat-and-scarf.jpg?s=612x612&w=0&k=20&c=B4I4SPV7avjYsBf0yVkiLBGf7OV6OgpbD4yy0stDBQ4=",
        title: "Women Dress",
        rating1: <FaStar className='text-yellow-400 ' />,
        color: "LightGreen",
        price: "3500/-",
        aosDelay: "0",
    },
    {
        id: 37,
        img: "https://media.istockphoto.com/id/1474209303/photo/happy-teen-child-wear-sweater-and-earflap-hat-in-studio-winter-fashion-for-teen-child.jpg?s=612x612&w=0&k=20&c=wG4irpO_Ou1ue9G6tmVJhL5zOZwOM_fGiJwZ3X6kVDw=",
        title: "Women Comboo",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "Black & Yello",
        price: "3000/-",
        aosDelay: "200",
    },
    {
        id: 38,
        img: "https://media.istockphoto.com/id/474947550/photo/five-year-old-boy.jpg?s=612x612&w=0&k=20&c=V8QEIjRn8fYRGJkh1fNQfiOiKJQyW_G3ZOH5NVXLxrI=",
        title: "Blue Dress",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "Brown",
        price: "2100/-",
        aosDelay: "400",
    },
    {
        id: 39,
        img: "https://media.istockphoto.com/id/2093305447/photo/pretty-indian-girl-posing-for-selfie-with-a-smiling-face-and-peace-sign-hand-gesture.jpg?s=612x612&w=0&k=20&c=G6HypqOz1G6wZ6JeoQUYHdI3aWZNkqYHjY1tjY958es=",
        title: "Yello Dress",
        rating1: [<FaStar className='text-yellow-400 ' />, <FaStar className='text-yellow-400 ' />],
        color: "Yello",
        price: "1000/-",
        aosDelay: "600",
    },
    {
        id: 40,
        img: "https://media.istockphoto.com/id/700869776/photo/portrait-of-a-teenage-girl.jpg?s=612x612&w=0&k=20&c=VWR1qAJuK9NMzNoO3YJJXkNoVd6ILctlCyGo-5E_GfY=",
        title: "Women Jeens",
        rating1: <FaStar className='text-yellow-400 ' />,
        color: "Blue",
        price: "1600/-",
        aosDelay: "800",
    },
];

function KidsWear() {
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
        setVisibleCount((prevCount) => prevCount + 20); // Increment visible cards by 20
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
                            <h1 data-aos="fade-up" className="text-3xl mt-4 sm:mt-10 font-bold">Kid's Wear</h1>
                        </div>
                        <div>
                            <div className="grid grid-cols-2  sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
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
                            {
                                visibleCount < filteredProductsData.length && (
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
    );
}

export default KidsWear;
