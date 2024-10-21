"use client";
import { useState } from "react";
import projects from "./data/projects.json";
import Image from "next/image";
import ProjectCard from "./components/ProjectCard";
import { useInView } from "react-intersection-observer";
import { AnimatePresence, motion, Variants } from "framer-motion";
import ImageCarousel from "./components/imageCarousel";
import ExperimentSection from "./components/experimentSection";
import ProjectSection from "./components/projectSection";
import TypewriterTitle from "./components/typewritertitle";
/* eslint-disable react/no-unescaped-entities */

export type Project = {
  text: string[][];
  title: string;
  description: string;
  tags: string[];
  links: string[][];
  abstract?: string; // Optional property
}


const containerVariants = {
  hidden: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05, // Stagger children by 0.2 seconds
    },
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05, // Stagger children by 0.2 seconds
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const cardVariants: Variants = {
  offscreen: {
    y: 300
  },
  onscreen: {
    y: 50,
   
    transition: {
      type: "bounce",
      bounce: 0.4,
      duration: 0.2
    }
  }
};

export default function HomePage() {
  const [hoveredSection, setHoveredSection] = useState("");
  const [activeSection, setActiveSection] = useState("Me");
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

      {/* <Header/> */}
      <nav className="absolute left-1/2 transform -translate-x-1/2 pt-5 md:pt-10 lg:pt-10 top-0 z-20 text-center justify-center w-full">
        <motion.div
          initial="hidden"
          animate="show"
          exit="hidden"
          variants={containerVariants}
          className="flex text-center gap-[5%] md:gap-[10%] justify-center w-full"
        >
          <motion.div variants={itemVariants}>
            <button onMouseEnter={() => setHoveredSection("About")}>
              About
            </button>
            <AnimatePresence>
              {hoveredSection === "About" && (
                <motion.div
                  id="navbarSection"
                  initial="hidden"
                  variants={containerVariants}
                  animate="show"
                  exit="hidden"
                  onMouseLeave={() => setHoveredSection("")}
                >
                  <motion.button
                    id="subButton"
                    variants={itemVariants}
                    onClick={() => {
                      setActiveSection("Me");
                      setHoveredSection("");
                    }}
                  >
                    Me
                  </motion.button>
               
                  <motion.button
                    id="subButton"
                    variants={itemVariants}
                    onClick={() => window.open("/CV.pdf", "_blank")}
                  >
                    CV
                  </motion.button>
                  <motion.button
                    id="subButton"
                    variants={itemVariants}
                    className="lg:hidden"
                    onClick={() => {
                      setActiveSection("Email");
                      setHoveredSection("");
                    }}
                  >
                    Contact
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div variants={itemVariants}>
            <button onMouseEnter={() => setHoveredSection("Experiments")}>
              Experiments
            </button>
            <AnimatePresence>
              {hoveredSection === "Experiments" && (
                <motion.div
                  id="navbarSection"
                  onMouseLeave={() => setHoveredSection("")}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={containerVariants}
                >
                  {experimentsSection?.projects.map((experiment, index) => (
                    <motion.button
                      id="subButton"
                      key={index}
                      variants={itemVariants}
                      onClick={() => {
                        setActiveSection(experiment.title);
                        setHoveredSection("");
                      }}
                    >
                      {experiment.title}
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div variants={itemVariants}>
            <button onMouseEnter={() => setHoveredSection("Projects")}>
              Projects
            </button>
            <AnimatePresence>
              {hoveredSection === "Projects" && (
                <motion.div
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={containerVariants}
                  id="navbarSection"
                  onMouseLeave={() => setHoveredSection("")}
                >
                  {projectsSection?.projects.map((project, index) => (
                    <motion.button
                      id="subButton"
                      key={index}
                      variants={itemVariants}
                      onClick={() => {
                        setActiveSection(project.title);
                        setHoveredSection("");
                      }}
                    >
                      {project.title}
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div variants={itemVariants} className="hidden lg:block">
            <button onMouseEnter={() => setHoveredSection("Contact")}>
              Contact
            </button>
            <AnimatePresence>
              {hoveredSection === "Contact" && (
                <motion.div
                  id="navbarSection"
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  onMouseLeave={() => setHoveredSection("")}
                >
                  <motion.button
                    variants={itemVariants}
                    id="subButton"
                    onClick={() => {
                      setActiveSection("Email");
                      setHoveredSection("");
                    }}
                  >
                    Email
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </nav>

      <div
        className={`flex flex-grow justify-center items-center  px-[5%] transition-all ease-in-out duration-500 ${
          hoveredSection !== "" ? "blur-xl bg-white opacity-30" : ""
        }`}
        style={{ zIndex: 10 }}
        onClick={() => setHoveredSection("")}
      >
       {activeSection === "Me" && (
  <div className="h-screen grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6 lg:gap-8 items-center px-4 md:px-8">
    <motion.div
      initial="hidden"
      animate="show"
      exit="hidden"
      variants={containerVariants}
      className="flex justify-center md:mt-0"
    >
      <div className="relative top-[5vh] md:top-0">
        <Image
          alt="image of me"
          src={"/me.webp"}
          width={300}
          height={300}
          className="backdrop-blur-md drop-shadow-lg shadow-md"
          priority
        />
      </div>
    </motion.div>
    <motion.div
      initial="hidden"
      animate="show"
      exit="hidden"
      variants={containerVariants}
      className="flex items-center"
    >
      <motion.h2
        variants={itemVariants}
        className="text-2xl md:text-5xl pt-0 lg:text-7xl min-h-[150px] md:min-h-0"
      >
        Hey, I'm George and I'm a <TypewriterTitle />
      </motion.h2>
    </motion.div>
  </div>
)}

        {activeSection === "Biography" && (
          <p className="lg:px-[20%]">{biography?.projects[0].description}</p>
        )}
        {activeSection === "Artist Statement" && (
          <p className="lg:px-[20%]">{biography?.projects[1].description}</p>
        )}

        {activeSection === activeExperiment?.title && (
         
          <ExperimentSection selectedExperiment={activeExperiment}/>
          
        )}

             
        {activeSection === activeProject?.title && (
          <ProjectSection selectedProject={activeProject} />
        )}

        {activeSection === "Email" && (
          <div className="text-center justify-center items-center grid grid-rows-3 gap-10">          <a id="subButton" href="mailto:george.philip.gausden@gmail.com" 
    className="text-3xl !not-italic "
    target="_blank" 
    rel="noopener noreferrer">Email
          </a>
          <a id="subButton" href="https://www.instagram.com/georgegausden/" 
    className="text-3xl !not-italic"
    target="_blank" 
    rel="noopener noreferrer">Instagram
          </a>
          <a id="subButton" href="https://www.linkedin.com/in/george-gausden/" 
    className="text-3xl !not-italic"
    target="_blank" 
    rel="noopener noreferrer">LinkedIn
          </a>
          </div>
        )}
      

     
    </div>
    </div>
  );
}
