import Image from 'next/image';
import React from 'react';
import { FaFacebookF } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FiYoutube } from "react-icons/fi";

const Banner = () => {
    return (
        <div className='relative'>
            <div className=''>
                <div className='relative'>
                <Image src={"/assets/banner.webp"}
                alt='banner-image'
                width={1600} height={500}
                className='w-full h-[400px] md:h-[500px]'
                />
                </div>
                <div className='absolute w-full lg:w-[50%] top-20 md:top-10 left-12 space-y-4'>
                    <h5 className='font-bold text-white text-shadow-md'>New Arrival</h5>
                    <h2 className='text-3xl font-extrabold md:text-6xl text-secondary text-shadow-lg'>Smart Watches</h2>
                    <p className='hidden md:block text-primary text-shadow-md w-[600px]'>We've reviewed every smartwatch on the market and have been testing these products for a long time. Each of the products is reviewed by a health and fitness expert and scored on design, features, performance, and value for money.</p>
                    <h3 className='p-3 md:p-5 w-[90px] md:w-[130px] h-[90px] md:h-[130px] shadow-lg text-2xl md:text-4xl font-extrabold bg-green-500 text-white text-shadow-md rounded-tl-[40px] rounded-br-[70px]'><span className='text-sm md:text-lg '>SAVE</span> 35%</h3>
                    <button className='px-10 py-4 font-semibold text-white rounded shadow cursor-pointer text-shadow-md bg-primary hover:text-secondary'>Shop Now</button>
                </div>
                <div className='absolute grid gap-4 text-2xl md:text-4xl right-2 md:right-8 top-35 md:top-50'>
                    <FaFacebookF className='cursor-pointer text-shadow-lg animate-float text-secondary hover:text-white'/>
                    <BsTwitterX  className='cursor-pointer text-shadow-lg animate-float text-secondary hover:text-white'/>
                    <FiYoutube  className='cursor-pointer text-shadow-lg animate-float text-secondary hover:text-white'/>
                </div>
            </div>
        </div>
    );
};

export default Banner;