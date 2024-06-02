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
/* eslint-disable react/no-unescaped-entities */

export type Project = {
  text: any;
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
      <nav className="absolute left-1/2 transform -translate-x-1/2 pt-10 top-0 z-20 text-center justify-center w-full">
        <motion.div
          initial="hidden"
          animate="show"
          exit="hidden"
          variants={containerVariants}
          className="flex text-center gap-[12%] md:gap-[10%] justify-center w-full"
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
                    onClick={() => {
                      setActiveSection("Biography");
                      setHoveredSection("");
                    }}
                  >
                    Biography
                  </motion.button>
                  <motion.button
                    id="subButton"
                    variants={itemVariants}
                    onClick={() => {
                      setActiveSection("Artist Statement");
                      setHoveredSection("");
                    }}
                  >
                    Artist Statement
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
                    className="md:hidden"
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
          hoveredSection !== "" ? "blur-xl" : ""
        }`}
        style={{ zIndex: 10 }}
        onClick={() => setHoveredSection("")}
      >
        {activeSection === "Me" && (
          <div className=" flex flex-col mb-24 ">
            <motion.div
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={containerVariants}
              className="h-screen flex items-center  border-b-2 border-gray-500"
            >

              <motion.h2 variants={itemVariants} className="text-7xl lg:text-8xl">
                Hey, I'm George. I'm a freelance{" "}
                <i id="specialText" className=" not-italic">
                  UI/UX Designer
                </i>
                .{" "}
              </motion.h2>
              <motion.button
                variants={itemVariants}
                onClick={() =>
                  window.scrollTo({
                    top: window.innerHeight,
                    behavior: "smooth",
                  })
                }
                className="absolute bottom-28 right-0 animate-bounce"
              >
                <svg
                  width="90"
                  height="90"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.1683 2.19324C4.85508 2.19324 2.16699 4.88132 2.16699 8.19454C2.16699 11.5078 4.85508 14.1959 8.1683 14.1959C11.4815 14.1959 14.1696 11.5078 14.1696 8.19454C14.1696 4.88132 11.4815 2.19324 8.1683 2.19324Z"
                    stroke="gray"
                    strokeWidth="0.5"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M11.1699 6.94427L8.16881 9.94536L5.16772 6.94427"
                    stroke="gray"
                    strokeWidth="0.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.button>
            </motion.div>

            <motion.div className="mt-10">
            <motion.h1 >
              What I do
            </motion.h1>
            <motion.li>
              <motion.div className="grid grid-cols-2">



                <h2><strong>UI/UX Design</strong></h2>
                <p>
                  I design user interfaces and experiences for web and mobile
                  applications.
                </p>

                
              
              </motion.div>

              <ImageCarousel/>
              </motion.li>
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
          <div className="text-3xl">georgegausden at gmail dot com</div>
        )}
      

     
    </div>
    </div>
  );
}
