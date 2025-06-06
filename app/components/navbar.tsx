import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import projects from "../data/projects.json";

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

export default function Header() {

const [hoveredSection, setHoveredSection] = useState("");
  const [activeSection, setActiveSection] = useState("Me");

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

  const activeWebsite = projects
    .find((project) => project.category === "Websites")
    ?.projects.find((website) => website.title === activeSection);

  const activeProject = projects
    .find((project) => project.category === "Projects")
    ?.projects.find((experiment) => experiment.title === activeSection);
  
    return (
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
                  {/* <motion.button
                    id="subButton"
                    variants={itemVariants}
                    onClick={() => {
                      setActiveSection("Biography");
                      setHoveredSection("");
                    }}
                  >
                    Biography
                  </motion.button> */}
                  {/* <motion.button
                    id="subButton"
                    variants={itemVariants}
                    onClick={() => {
                      setActiveSection("Artist Statement");
                      setHoveredSection("");
                    }}
                  >
                    Artist Statement
                  </motion.button> */}
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
    );
}