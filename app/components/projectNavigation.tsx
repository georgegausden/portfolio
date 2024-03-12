'use client'
import React, { useEffect, useState } from "react";

function ProjectNavigation() {
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
        <button><a className={activeId === 'initial-concept' ? 'font-extrabold' : ''} onClick={(e) => handleClick(e, 'initial-concept')}>Initial Concept</a></button>
        <button><a className={activeId === 'first-stage' ? 'font-extrabold' : ''} onClick={(e) => handleClick(e, 'first-stage')}>First Stage</a></button>
        <button><a className={activeId === 'second-stage' ? 'font-extrabold' : ''} onClick={(e) => handleClick(e, 'second-stage')}>Second Stage</a></button>
        <button><a className={activeId === 'third-stage' ? 'font-extrabold' : ''} onClick={(e) => handleClick(e, 'third-stage')}>Third Stage</a></button>
        <button><a className={activeId === 'final-thoughts' ? 'font-extrabold' : ''} onClick={(e) => handleClick(e, 'final-thoughts')}>Final Thoughts</a></button>
      </div>
    </nav>
  );
}

export default ProjectNavigation;