'use client'
import Navbar from "../components/navbar"
import { useState } from "react";

export default function homePage() {
    const [hoveredSection, setHoveredSection] = useState('');
    const [activeSection, setActiveSection] = useState('');

    return (
        <div>
            <div className=" bg-[#F3F3F3] w-full h-screen">

            

{/* section for navbar */}
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
<button onClick={() => setActiveSection('Biography')}>Biography</button>            
<button onClick={() => setActiveSection('CV')}>CV</button>
            <button onClick={() => setActiveSection('Artist Statement')}>Artist Statement</button>
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
            <button>Download CV</button>
          </div>
        )}
      </div>
    </div>
  </nav>

{/* section for content */}
  <div className=" overflow-x-scroll bg-purple-200 h-full">

    
    
  </div>
            </div>

<div className="w-full h-[10%] absolute bottom-0" style={{ background: 'linear-gradient(to bottom, #D2D2D2, #C5C5C5)' }}></div>        </div>
    )
}