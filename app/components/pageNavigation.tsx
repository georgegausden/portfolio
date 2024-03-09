'use client'
import React from "react";

function PageNavigation() {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });

        }
    };

    return (
        <nav className="col-start-5 sticky top-[91px] ">
            <div className="grid grid-rows-3 text-center text-green-950 gap-[91px] ">
                <button><a className="mb-0 mt-0" onClick={(e) => handleClick(e, 'initial-concept')}>Initial Concept</a></button>
                <button><a className="mb-0 mt-0" onClick={(e) => handleClick(e, 'first-stage')}>First Stage</a></button>
                <button><a className="mb-0 mt-0" onClick={(e) => handleClick(e, 'second-stage')}>Second Stage</a></button>
                <button><a className="mb-0 mt-0" onClick={(e) => handleClick(e, 'third-stage')}>Third Stage</a></button>
                <button><a className="mb-0 mt-0" onClick={(e) => handleClick(e, 'final-thoughts')}>Final Thoughts</a></button>
            </div>
            {/* navigation for the experiment page */}
        </nav>
    );
}

export default PageNavigation;