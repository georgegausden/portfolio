'use client';

import { useState } from 'react';

function Navbar() {
  const [hoveredSection, setHoveredSection] = useState('');

  return (
    <nav className="sticky py-10">
      <div className="flex text-center text-gray-800 gap-[15%] justify-center items-start">
        <div>
          <h3 
            onMouseEnter={() => setHoveredSection('About')}
          >
            About
          </h3>
          {hoveredSection === 'About' && (
            <div className="flex flex-col items-start translate-x-[50%] py-5">
              <button>Biography</button>
              <button>CV</button>
              <button>Artist Statement</button>
            </div>
          )}
        </div>

        <div>
          <h3 
            onMouseEnter={() => setHoveredSection('Experiments')}
          >
            Experiments
          </h3>
          {hoveredSection === 'Experiments' && (
            <div className="flex flex-col items-start translate-x-[50%] py-5">
              <button>Experiment 1</button>
              <button>Experiment 2</button>
              <button>Experiment 3</button>
            </div>
          )}
        </div>

        <div>
          <h3 
            onMouseEnter={() => setHoveredSection('Projects')}
          >
            Projects
          </h3>
          {hoveredSection === 'Projects' && (
            <div className="flex flex-col items-start translate-x-[50%] py-5">
              <button>Project 1</button>
              <button>Project 2</button>
              <button>Project 3</button>
            </div>
          )}
        </div>

        <div>
          <h3 
            onMouseEnter={() => setHoveredSection('Contact')}
          >
            Contact
          </h3>
          {hoveredSection === 'Contact' && (
            <div className="flex flex-col items-start translate-x-[50%] py-5">
              <button>Email</button>
              <button>Phone</button>
              <button>Address</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;