import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const Logo = () => {
    return (
        <Link href={"/"} className='flex'>
            <Image src="/assets/logo-watch.png" alt='logo-image' width={80} height={50} className='w-16 md:w-22 h-16 md:h-22 animate-pulse'/>
            <h2 className='text-3xl md:text-4xl font-extrabold mt-6 md:mt-8'>smart<span className='text-orange-700'>Wrist</span></h2>
        </Link>
    );
};

export default Logo;