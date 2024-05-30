import { motion, AnimatePresence } from "framer-motion";


export default function navbar(){

  
  return(
    <nav>
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
    </nav>
  )
}