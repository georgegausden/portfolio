'use client'
import Navbar from "../components/navbar"
import { useState } from "react";
import projects from "../data/projects.json";

export default function homePage() {
    const [hoveredSection, setHoveredSection] = useState('');
    const [activeSection, setActiveSection] = useState('');

    
const biography = projects.find(project => project.category === 'About');
const artistStatement = projects.find(project => project.category === 'About');
const experimentsSection = projects.find(project => project.category === 'Experiments');
const projectsSection = projects.find(project => project.category === 'Projects');

const activeExperiment = projects.find(project => project.category === 'Experiments')?.projects.find(experiment => experiment.title === activeSection);




    return (
        <div>
            <div className=" bg-[#F3F3F3] w-full h-[90%]">

            

{/* section for navbar */}
<div className="relative">
<nav style={{position: 'absolute', top: 0, width: '100%'}} className="sticky py-10">
    <div className="flex text-center text-gray-800 gap-[20%] justify-center items-start">
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
    {experimentsSection?.projects.map((experiment, index) => (
      <button key={index} onClick={() => setActiveSection(experiment.title)}>
        {experiment.title}
      </button>
    ))}
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
    {projectsSection?.projects.map((project, index) => (
      <button key={index} onClick={() => setActiveSection(project.title)}>{project.title}</button>
    ))}
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
  </div>

{/* section for content */}
  <div className=" overflow-x-scroll bg-purple-200 flex items-center justify-center px-[20%]">
       {activeSection === 'Biography' && (
  
    <p>{biography?.projects[0].description}</p>
 
)}

{activeSection === 'Artist Statement' && (
  
  <p>{biography?.projects[1].description}</p>

)}


{activeSection === activeExperiment?.title && (
  <div className="flex flex-row">
    {activeExperiment?.links.map((link, index) => (
      <img key={index} src={link} alt={activeExperiment.title} />
    ))}
  </div>
)}





    
    
  </div>
            </div>

<div className="w-full h-[10%] absolute bottom-0" style={{ background: 'linear-gradient(to bottom, #D2D2D2, #C5C5C5)' }}></div>        </div>
    )
}