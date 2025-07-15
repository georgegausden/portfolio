"use client";
import { useState } from "react";
import dynamic from 'next/dynamic'; // Import dynamic
import projects from "./data/projects.json";
import Image from "next/image";
import ProjectCard from "./components/ProjectCard";
import { useInView } from "react-intersection-observer";
import { AnimatePresence, motion, Variants } from "framer-motion";
import ImageCarousel from "./components/imageCarousel";
import ExperimentSection from "./components/experimentSection";
import ProjectSection from "./components/projectSection";
import TypewriterTitle from "./components/typewritertitle";
// TagFilterSection is imported as default from ./components/tags
// UnifiedSection is imported as default from ./components/unifiedSection

/* eslint-disable react/no-unescaped-entities */

// Dynamically import components
const DynamicUnifiedSection = dynamic(() => import('./components/unifiedSection'), {
  loading: () => <p>Loading...</p>,
});
const DynamicTagFilterSection = dynamic(() => import('./components/tags'), {
  loading: () => <p>Loading...</p>,
});

export type Project = {
  text: string[][];
  title: string;
  description: string;
  tags: string[];
  links: string[][];
  abstract?: string; // Optional property
  projectUrl?: string; // Add projectUrl here
  backgroundColor?: string; // Add backgroundColor here
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
  const [activeCategory, setActiveCategory] = useState(""); // Add category state
  const biography = projects.find((project) => project.category === "About");
  const artistStatement = projects.find(
    (project) => project.category === "About"
  );
  const websitesSection = projects.find(
    (project) => project.category === "Websites"
  );
  const projectsSection = projects.find(
    (project) => project.category === "Projects"
  );
  
  const contact = projects.find((project) => project.category === "Contact");

  const activeWebsite = activeCategory === "Websites" 
    ? projects
        .find((project) => project.category === "Websites")
        ?.projects.find((website) => website.title === activeSection) as Project | undefined
    : undefined;

  const activeProject = activeCategory === "Projects"
    ? projects
        .find((project) => project.category === "Projects")
        ?.projects.find((experiment) => experiment.title === activeSection) as Project | undefined
    : undefined;

  // Get background color for website projects
  const getBackgroundStyle = () => {
    if (activeCategory === "Websites" && activeWebsite?.backgroundColor) {
      return { backgroundColor: activeWebsite.backgroundColor };
    }
    return {};
  };

  return (
    <div className="min-h-screen w-full" style={getBackgroundStyle()}>
      <div className="flex flex-col min-h-screen">

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
                      setActiveCategory("");
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
                      setActiveCategory("");
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
            <button onMouseEnter={() => setHoveredSection("Websites")}>
              Websites
            </button>
            <AnimatePresence>
              {hoveredSection === "Websites" && (
                <motion.div
                  id="navbarSection"
                  onMouseLeave={() => setHoveredSection("")}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={containerVariants}
                >
                  {websitesSection?.projects.map((website, index) => (
                    <motion.button
                      id="subButton"
                      key={index}
                      variants={itemVariants}
                      onClick={() => {
                        setActiveSection(website.title);
                        setActiveCategory("Websites");
                        setHoveredSection("");
                      }}
                    >
                      {website.title}
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
                        setActiveCategory("Projects");
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
                      window.open("mailto:george.philip.gausden@gmail.com", "_blank");
                      setHoveredSection("");
                    }}
                  >
                    Email ↗
                  </motion.button>

                  {/* <motion.button
                    variants={itemVariants}
                    id="subButton"
                    onClick={() => {
                      window.open("https://www.instagram.com/georgegausden/", "_blank");
                      setHoveredSection("");
                    }}
                  >
                    Instagram ↗
                  </motion.button> */}

                  <motion.button
                    variants={itemVariants}
                    id="subButton"
                    onClick={() => {
                      window.open("https://www.linkedin.com/in/george-gausden/", "_blank");
                      setHoveredSection("");
                    }}
                  >
                    LinkedIn ↗
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </nav>


      <div
        className={`flex flex-grow justify-center items-center px-[5%] transition-all ease-in-out duration-500 max-w-7xl mx-auto w-full ${
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
          src={"/me.jpg"}
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

{activeSection === activeWebsite?.title && activeCategory === "Websites" && (
  <DynamicUnifiedSection 
    selectedItem={{ ...activeWebsite, type: 'website' }}
    setActiveSection={setActiveSection}
    setActiveCategory={setActiveCategory}
  />
)}

{activeSection === activeProject?.title && activeCategory === "Projects" && (
  <DynamicUnifiedSection 
    selectedItem={{ ...activeProject, type: 'project' }}
    setActiveSection={setActiveSection}
    setActiveCategory={setActiveCategory}
  />
)}

{activeSection.startsWith('tag-') && (
  <DynamicTagFilterSection
    allProjects={projects}
    selectedTag={activeSection.replace('tag-', '')}
    setActiveSection={setActiveSection}
    setActiveCategory={setActiveCategory}
  />
)}

        

{activeSection === "Email" && (
  <div className="text-center justify-center items-center grid grid-rows-3 gap-10">
    <a 
      id="subButton" 
      href="mailto:george.philip.gausden@gmail.com"
      className="text-3xl !not-italic justify-self-center"
      target="_blank"
      rel="noopener noreferrer"
    >
      Email ↗
    </a>
    <a 
      id="subButton" 
      href="https://www.instagram.com/georgegausden/"
      className="text-3xl !not-italic justify-self-center"
      target="_blank"
      rel="noopener noreferrer"
    >
      Instagram ↗
    </a>
    <a 
      id="subButton" 
      href="https://www.linkedin.com/in/george-gausden/"
      className="text-3xl !not-italic justify-self-center"
      target="_blank"
      rel="noopener noreferrer"
    >
      LinkedIn ↗
    </a>
  </div>
)}
      

     
    </div>
    </div>
    </div>
  );
}
