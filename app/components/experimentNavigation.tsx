'use client'
import React, { useEffect, useState } from "react";

function PageNavigation() {
  const [activeId, setActiveId] = useState('');

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

useEffect(() => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setActiveId(entry.target.id);
            }
        });
    }, { threshold: 0.7 });

    const sections = document.querySelectorAll('h2');
    sections.forEach(section => observer.observe(section));

    return () => {
        sections.forEach(section => observer.unobserve(section));
    };
}, []);

  return (
    <nav className="col-start-5 sticky top-[91px]">
       
      <div className="grid grid-rows-auto text-center text-green-950 gap-[91px] ">
        <button><a className={activeId === 'Inspiration' ? 'font-extrabold' : ''} onClick={(e) => handleClick(e, 'Inspiration')}>Inspiration</a></button>
        <button><a className={activeId === 'Iterations' ? 'font-extrabold' : ''} onClick={(e) => handleClick(e, 'Iterations')}>Iterations</a></button>
        <button><a className={activeId === 'Final-Result' ? 'font-extrabold' : ''} onClick={(e) => handleClick(e, 'Final-Result')}>Final Result</a></button>
      </div>
    </nav>
  );
}

export default PageNavigation;