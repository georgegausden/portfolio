import React from 'react';
import Link from 'next/link'

function Navbar() {
    return (
        <nav className='w-full h-10 grid grid-cols-2 border-b items-center'>
            <div className='flex'>
                George Gausden
            </div>
            <div className='grid grid-cols-3 items-center justify-center'> 
                <Link href="/" className='flex items-center justify-center hover:italic'>Projects</Link> 
                <a href="/CV.pdf" download className='flex items-center justify-center hover:italic'>Resume</a>
                <Link href="/about" className='flex items-center justify-center hover:italic'>About</Link> 
            </div>
        </nav>
    );
};

export default Navbar;