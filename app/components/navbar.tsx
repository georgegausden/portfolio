import React from "react";
import Link from "next/link";

function Navbar() {
return (
    <nav className="col-span-1 col-start-6 fixed translate-x-80">
        <div className="grid grid-rows-3 text-center text-gray-800 border-l">
            <Link className="my-24" href="/">Home</Link>
            <Link className="my-24" href="/about">About</Link>
            <Link className="my-24" href="/contact">Contact</Link>
            
        </div>
        {/* navigation for the experiment page */}
    </nav>
);
}

export default Navbar;
