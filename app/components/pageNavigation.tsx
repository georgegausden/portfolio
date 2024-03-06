import React from "react";
import Link from "next/link";

function PageNavigation() {
return (
    <nav className="col-start-5 ">
        <div className="grid grid-rows-3 text-center text-green-950 gap-[200px] ">
        <a className="mb-0 mt-0" href='#initial-concept'>Initial Concept</a>
                    <a className="mb-0 mt-0" href="#first-stage">First Stage</a>
                    <a className="mb-0 mt-0" href="#second-stage">Second Stage</a>
                    <a className="mb-0 mt-0" href="#third-stage">Third Stage</a>
                    <a className="mb-0 mt-0" href="#final-thoughts">Final Thoughts</a>
            
        </div>
        {/* navigation for the experiment page */}
    </nav>
);
}

export default PageNavigation;
