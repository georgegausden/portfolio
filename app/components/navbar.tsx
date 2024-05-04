import React from "react";
import Link from "next/link";

function Navbar() {
return (
    <nav className="sticky top-[91px]">

        
        
        <div className="grid grid-rows-3 text-center text-gray-800 gap-[91px] font-bold">
            <Link className="mb-0 mt-0" href="/">Home</Link>
            <Link className="mb-0 mt-0" href="/about">About</Link>
            <Link className="mb-0 mt-0" href="https://www.instagram.com/georgegausden/"
              target="_blank">Instagram</Link>
            <a className="mb-0 mt-0" href="mailto:george.philip.gausden@gmail.com">Email</a>
            <Link className="mb-0 mt-0"  href="/CV.pdf" download>CV</Link>
            
        </div>
        {/* navigation for the experiment page */}
    </nav>
);
}

export default Navbar;
