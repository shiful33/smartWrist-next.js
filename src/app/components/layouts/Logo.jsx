import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const Logo = () => {
    return (
        <Link href={"/"} className='flex'>
            <Image src="/assets/logo-watch.png" alt='logo-image' width={70} height={50} className='w-12 h-13 md:w-16 md:h-18 animate-pulse'/>
            <h2 className='mt-6 text-2xl font-extrabold md:text-4xl md:mt-8'>smart<span className='text-orange-700'>Wrist</span></h2>
        </Link>
    );
};

export default Logo;