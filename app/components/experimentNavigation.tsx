'use client'
import React, { useEffect, useState } from "react";

interface PageNavigationProps {
  sections: string[];
}

const PageNavigation: React.FC<PageNavigationProps> = ({ sections }) => {
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
      {sections.map(section => (
          <button key={section}>
            <a 
              className={activeId === section ? 'font-extrabold' : ''} 
              onClick={(e) => handleClick(e, section)}
            >
              {section}
            </a>
          </button>
        ))}
      </div>
    </nav>
  );
}

export default PageNavigation;