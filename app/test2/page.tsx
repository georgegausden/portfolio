"use client";
import Navbar from "../components/navbar";
import { useState } from "react";
import projects from "../data/projects.json";
import Image from "next/image";

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
    <div className="flex flex-col">
      <nav className="fixed pt-10 top-0 z-20 text-center justify-center w-full">
        <div className="flex text-center gap-[15%] md:gap-[10%] justify-center w-full">
          <div>
            <h3 onMouseEnter={() => setHoveredSection("About")}>About</h3>
            {hoveredSection === "About" && (
              <div
                id="navbarSection"
                onMouseLeave={() => setHoveredSection("")}
              >
                <button onClick={() => setActiveSection("Biography")}>
                  Biography
                </button>
                <button onClick={() => setActiveSection("Artist Statement")}>
                  Artist Statement
                </button>
                <button onClick={() => window.open("/CV.pdf", "_blank")}>
                  CV
                </button>
              </div>
            )}
          </div>

          <div>
            <h3 onMouseEnter={() => setHoveredSection("Experiments")}>
              Experiments
            </h3>
            {hoveredSection === "Experiments" && (
              <div
                id="navbarSection"
                onMouseLeave={() => setHoveredSection("")}
              >
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
              <div
                id="navbarSection"
                onMouseLeave={() => setHoveredSection("")}
              >
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
            <h3 onMouseEnter={() => setHoveredSection("Contact")}>Contact</h3>
            {hoveredSection === "Contact" && (
              <div
                id="navbarSection"
                onMouseLeave={() => setHoveredSection("")}
              >
                <button onClick={() => setActiveSection("Email")}>Email</button>
                <button>Download CV</button>
              </div>
            )}
          </div>
        </div>
      </nav>

      <div
        className={`flex justify-center items-center py-[10%] px-[10%] transition-all ease-in-out duration-500 ${
          hoveredSection !== "" ? "blur-md" : ""
        }`}
        style={{ zIndex: 10 }}
      >
        {activeSection === "" && (
          // eslint-disable-next-line react/no-unescaped-entities
          <h1>Hey, I'm George. I'm a digital artist interested in the</h1>
        )}

        {activeSection === "Biography" && (
          <p className="px-[20%]">{biography?.projects[0].description}</p>
        )}
        {activeSection === "Artist Statement" && (
          <p className="px-[20%]">{biography?.projects[1].description}</p>
        )}
        {activeSection === activeExperiment?.title && (
          <div className="flex flex-col md:flex-row gap-20 pr-10">
            {activeExperiment?.links.map((link, index) => (
              <div key={index} className="relative flex-shrink-0 group">
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
          <div className="flex gap-20 items-start overflow-x-auto">
            <div className="min-w-[600px]">
              <h1>{activeProject.title}</h1>
              <p>{activeProject.description}</p>
              <div className="flex flex-wrap">
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
            <div className="relative group flex-shrink-0">
              <Image
                src={activeProject.links[0][0]}
                alt={activeProject.title}
                width={300}
                height={300}
              />
              <div id="imageCaption">{activeProject.links[0][1]}</div>
            </div>
            <div className="min-w-[500px]">
              <h2>Abstract</h2>
              {activeProject?.abstract ? (
                <p>{activeProject.abstract}</p>
              ) : (
                <p>No abstract available.</p>
              )}
            </div>

            <div className="relative group flex-shrink-0">
              <Image
                src={activeProject.links[1][0]}
                alt={activeProject.title}
                width={300}
                height={300}
              />
              <div id="imageCaption">{activeProject.links[1][1]}</div>
            </div>
            <div className="min-w-[500px]">
              <h2>Process</h2>
              {activeProject?.process ? (
                <p>{activeProject.process}</p>
              ) : (
                <p>No process available.</p>
              )}
            </div>
            
          </div>
        )}
        {activeSection === "Email" && (
          <div className="text-3xl">georgegausden at gmail dot com</div>
        )}
      </div>

      <div
        className="fixed bottom-0 left-0 w-full h-[5%] z-30"
        style={{ background: "linear-gradient(to bottom, #D2D2D2, #C5C5C5)" }}
      ></div>
    </div>
  );
}
