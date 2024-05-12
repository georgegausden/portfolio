"use client";
import Navbar from "../components/navbar";
import { useState } from "react";
import projects from "../data/projects.json";
import Image from "next/image";

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
    <div className="flex md:h-screen flex-col max-w-[100rem] mx-auto">
      <div className=" bg-[#F3F3F3] w-full h-[95%]">
        {/* section for navbar */}
        
          <nav
            
            className="md:fixed py-10 top-0 z-10 text-center justify-center w-full max-w-[100rem]"
          >
            <div className="flex text-center gap-[15%] md:gap-[20%] justify-center w-full">
              <div>
                <h3 onMouseEnter={() => setHoveredSection("About")}>About</h3>
                {hoveredSection === "About" && (
                  <div id="navbarSection">
                    <button onClick={() => setActiveSection("Biography")}>
                      Biography
                    </button>
                   
                    <button
                      onClick={() => setActiveSection("Artist Statement")}
                    >
                      Artist Statement
                    </button>
                    <button onClick={() => window.open("/CV.pdf", "_blank")}>CV</button>
                  </div>
                )}
              </div>

              <div>
                <h3 onMouseEnter={() => setHoveredSection("Experiments")}>
                  Experiments
                </h3>
                {hoveredSection === "Experiments" && (
                  <div id="navbarSection">
                    {experimentsSection?.projects.map((experiment, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveSection(experiment.title)}
                      >
                        {experiment.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <h3 onMouseEnter={() => setHoveredSection("Projects")}>
                  Projects
                </h3>

                {hoveredSection === "Projects" && (
                  <div id="navbarSection">
                    {projectsSection?.projects.map((project, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveSection(project.title)}
                      >
                        {project.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="hidden md:block">
                <h3 onMouseEnter={() => setHoveredSection("Contact")}>
                  Contact
                </h3>
                {hoveredSection === "Contact" && (
                  <div id="navbarSection">
                    <button onClick={() => setActiveSection("Email")}>Email</button>
                    
  <button>Download CV</button>

                  </div>
                )}
              </div>
            </div>
          </nav>
      

        {/* section for content */}
        <div className="relative overflow-x-scroll flex items-center justify-center  md:px-10 mt-[8.5%] h-[85%] py-10">
          {activeSection === "Biography" && (
            <p className="px-[20%]">{biography?.projects[0].description}</p>
          )}

          {activeSection === "Artist Statement" && (
            <p className="px-[20%]">{biography?.projects[1].description}</p>
          )}

          {activeSection === activeExperiment?.title && (
            <div className="flex flex-col md:flex-row gap-20 pr-10 ">
              {activeExperiment?.links.map((link, index) => (
                <div key={index} className="relative flex-shrink-0 group bg-blue-500  ">
                <Image
                  key={index}
                  src={link[0]}
                  alt={activeExperiment.title}
                  width={500}
                  height={500}
                  />
                <div id="imageCaption">{link[1]}</div>
                </div>
              ))}
            </div>
          )}

{activeSection === activeProject?.title && (
            <div className="flex flex-col md:flex-row gap-20 ">

              
              <div className="md:px-[10%]">
                <h1>{activeProject.title}</h1>
                <p>{activeProject.description}</p>
                
                {activeProject.tags?.map((tag, index) => (
                  <div key={index} className="inline-block bg-gray-200 p-2 m-1">
                    {tag}
                  </div>
                ))}
                
              </div>

              
              
              {activeProject?.links.map((link, index) => (
                <div key={index} className="relative flex-shrink-0 group bg-blue-500  ">
                  

                <Image
                  key={index}
                  src={link[0]}
                  alt={activeProject.title}
                  width={500}
                  height={500}
                  />
                <div id="imageCaption">{link[1]}</div>
                </div>
              ))}
            </div>
          )}

          {activeSection === "Email" && (
            <div className="text-3xl">georgegausden at gmail dot com</div>
          )}
        </div>
      </div>
      <div
        className="w-full h-[5%] bottom-0"
        style={{ background: "linear-gradient(to bottom, #D2D2D2, #C5C5C5)" }}
      ></div>{" "}
    </div>
  );
}
