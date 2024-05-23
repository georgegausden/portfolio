"use client";
import Navbar from "./components/navbar";
import { useState } from "react";
import projects from "./data/projects.json";
import Image from "next/image";
import ProjectCard from "./components/ProjectCard";
import { useInView } from 'react-intersection-observer';


interface Project {
  title: string;
  description: string;
  tags: string[];
  links: string[][];
  abstract?: string; // Optional property
}

export default function HomePage() {
  const [hoveredSection, setHoveredSection] = useState("");
  const [activeSection, setActiveSection] = useState("");
  const biography = projects.find((project) => project.category === "About");
  const artistStatement = projects.find(
    (project) => project.category === "About"
  );
  const experimentsSection = projects.find(
    (project) => project.category === "Experiments"
  );
  const projectsSection = projects.find(
    (project) => project.category === "Projects"
  );
  const contact = projects.find((project) => project.category === "Contact");
  const activeExperiment = projects
    .find((project) => project.category === "Experiments")
    ?.projects.find((experiment) => experiment.title === activeSection);

  const activeProject = projects
    .find((project) => project.category === "Projects")
    ?.projects.find((experiment) => experiment.title === activeSection);

    

  return (
    <div className="flex flex-col min-h-screen max-w-7xl mx-auto ">
      <nav className=" pt-10 top-0 z-20 text-center justify-center w-full">
        <div className="flex text-center gap-[12%] md:gap-[10%] justify-center w-full">
          <div>
            <button onMouseEnter={() => setHoveredSection("About")}>About</button>
            {hoveredSection === "About" && (
              <div
                id="navbarSection"
                onMouseLeave={() => setHoveredSection("")}
              >
                <button id="subButton" onClick={() => {
  setActiveSection("Biography");
  setHoveredSection("");
}}>
                  Biography
                </button>
                <button id="subButton" onClick={() => {
  setActiveSection("Artist Statement");
  setHoveredSection("");
}}>
                  Artist Statement
                </button>
                <button id="subButton" onClick={() => window.open("/CV.pdf", "_blank")}>
                  CV
                </button>
                <button id="subButton" className="md:hidden" onClick={() => {
  setActiveSection("Email");
  setHoveredSection("");
}}>Email</button>
              </div>
            )}
          </div>

          <div>
            <button onMouseEnter={() => setHoveredSection("Experiments")}>
              Experiments
            </button>
            {hoveredSection === "Experiments" && (
              <div
                id="navbarSection"
                onMouseLeave={() => setHoveredSection("")}
              >
                {experimentsSection?.projects.map((experiment, index) => (
                  <button id="subButton"
                    key={index}
                    onClick={() => {
                      setActiveSection(experiment.title);
                      setHoveredSection("");
                    }}
                  >
                    {experiment.title}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div>
            <button onMouseEnter={() => setHoveredSection("Projects")}>
              Projects
            </button>
            {hoveredSection === "Projects" && (
              <div
                id="navbarSection"
                onMouseLeave={() => setHoveredSection("")}
              >
                {projectsSection?.projects.map((project, index) => (
                  <button id="subButton"
                    key={index}
                    onClick={() => {
                      setActiveSection(project.title);
                      setHoveredSection("");
                    }}
                  >
                    {project.title}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="hidden md:block">
            <button onMouseEnter={() => setHoveredSection("Contact")}>Contact</button>
            {hoveredSection === "Contact" && (
              <div
                id="navbarSection"
                onMouseLeave={() => setHoveredSection("")}
              >
                <button id="subButton" onClick={() => {
  setActiveSection("Email");
  setHoveredSection("");
}}>Email</button>
                <button id="subButton">Download CV</button>
              </div>
            )}
          </div>
        </div>
      </nav>

      <div
        className={`flex flex-grow justify-center items-center py-[7%] px-[5%] transition-all ease-in-out duration-500 ${
          hoveredSection !== "" ? "blur-xl" : ""
        }`}
        style={{ zIndex: 10 }}
      >
        {activeSection === "" && (
          // eslint-disable-next-line react/no-unescaped-entities
         <h2>Hey, I'm George. I'm a <i className="underline not-italic">digital</i> artist.</h2>            
             
          
         
        )}

        {activeSection === "Biography" && (
          <p className="lg:px-[20%]">{biography?.projects[0].description}</p>
        )}
        {activeSection === "Artist Statement" && (
          <p className="lg:px-[20%]">{biography?.projects[1].description}</p>
        )}
       {activeSection === activeExperiment?.title && (
    <div className="flex flex-col text-center  gap-20">
      <div >
        <h1>{activeExperiment.title}</h1>
        <p>{activeExperiment.description}</p>
        <div className="flex flex-wrap justify-center">
          {activeExperiment.tags?.map((tag, index) => (
            
            <div
              key={index}
              className="inline-block bg-gray-200 p-2 m-1"
            >
              {tag}
            </div>
          ))}
          </div>
      </div>
      <div className="md:grid md:grid-cols-2 xl:grid-cols-3 gap-10">
      {activeExperiment?.links.map((link, index) => (
        
        <div key={index} className="relative flex-shrink-0 group justify-center items-center flex flex-col ">
  <Image
    key={index}
    src={link[0]}
    alt={activeExperiment.title}
    width={300}
    height={300}
  />
  <div id="imageCaption">{link[1]}</div>
</div>

      ))}
      </div>
    </div>
  )}
        {activeSection === activeProject?.title && (
          <div className="flex flex-col gap-20 items-start ">
            <div className="w-full justify-center">
              <h1>{activeProject.title}</h1>
              <p className="text-center">{activeProject.description}</p>
              <div className="flex flex-wrap justify-center">
                {activeProject.tags?.map((tag, index) => (
                  <div
                    key={index}
                    className="inline-block bg-gray-200 p-2 m-1"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex md:gap-20 flex-col ">
            <ProjectCard imageSrc={activeProject.links[0][0]} imageCaption={activeProject.links[0][1]} imageAlt="alt" description={activeProject.abstract} title="Abstract"></ProjectCard>
            <ProjectCard imageSrc={activeProject.links[1][0]} imageCaption={activeProject.links[1][1]} imageAlt="alt" description={activeProject.process} title="Process"></ProjectCard>
            <ProjectCard imageSrc={activeProject.links[2][0]} imageCaption={activeProject.links[2][1]} imageAlt="alt" description={activeProject.mapping} title="Mapping"></ProjectCard>
            </div>


           
          </div>
        )}
        {activeSection === "Email" && (
          <div className="text-3xl">georgegausden at gmail dot com</div>
        )}
      </div>

      <div
        className="fixed bottom-0 left-0 w-full h-[5%] z-30 hidden md:block"
        style={{ background: "linear-gradient(to bottom, #D2D2D2, #C5C5C5)" }}
      ></div>
    </div>
  );
}
