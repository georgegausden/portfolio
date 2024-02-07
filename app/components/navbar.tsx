import React from 'react';
import Link from 'next/link';

function Navbar() {
    return (
        <nav className='w-full h-10 grid grid-cols-2 border-b border-black  items-center md:mt-5'>
            <div className='flex ml-5'>
            <Link href="/" className='flex items-center justify-center hover:italic'>George Gausden</Link> 
            </div>
            <div className='grid grid-cols-5 items-center justify-center'> 
                <Link href="/" className='flex items-center justify-center hover:italic'>Projects</Link>
                <Link href="/" className='flex items-center justify-center hover:italic'>3D Projects</Link>
                <Link href="/experiments" className='flex items-center justify-center hover:italic'>Experiments</Link> 
                <Link href="/resume" className='flex items-center justify-center hover:italic'>Resume</Link>
                <Link href="/about" className='flex items-center justify-center hover:italic'>About</Link> 
            </div>
        </nav>
    );
};

export default Navbar;