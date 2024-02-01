import React from 'react';
import Link from 'next/link'

function Navbar() {
    return (
        <nav className='w-full h-10 grid grid-cols-2 border-b border-black  items-center md:my-5'>
            <div className='flex ml-5'>
            <Link href="/" className='flex items-center justify-center hover:italic'>George Gausden</Link> 
            </div>
            <div className='grid grid-cols-3 items-center justify-center'> 
                <Link href="/" className='flex items-center justify-center hover:italic'>Projects</Link> 
                <Link href="/resume" className='flex items-center justify-center hover:italic'>Resume</Link>
                <Link href="/about" className='flex items-center justify-center hover:italic'>About</Link> 
            </div>
        </nav>
    );
};

export default Navbar;