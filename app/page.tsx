"use client";
import { useState } from "react";
import projects from "./data/projects.json";
import Image from "next/image";
import ProjectCard from "./components/ProjectCard";
import { useInView } from "react-intersection-observer";
import { AnimatePresence, motion } from "framer-motion";
/* eslint-disable react/no-unescaped-entities */

interface Project {
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
          <div className=" flex flex-col justify-center mb-24">
            <motion.div
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={containerVariants}
              className="h-screen flex items-center"
            >
              <motion.h2 variants={itemVariants} className="text-8xl">
                Hey, I'm George. I'm a{" "}
                <i id="specialText" className=" not-italic">
                  digital artist
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

            <div>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus eos nulla velit facere, in sed consectetur odit,
              ipsa culpa ullam, voluptatem illo ducimus nihil. Eius repellendus
              exercitationem amet natus aut at, atque vitae, veritatis impedit
              aliquid eum ab consequuntur doloribus earum dignissimos vel qui
              deserunt. Provident veritatis quas hic aperiam neque ipsam numquam
              debitis dignissimos commodi, quaerat, doloremque tempore
              blanditiis eos voluptate, delectus accusantium. Vero assumenda
              dolorum laboriosam, odio veniam similique fuga esse alias eaque
              eius odit a impedit iusto. Laborum accusamus dicta aliquam cum quo
              voluptatum, dignissimos facere voluptate possimus sint suscipit
              delectus aperiam fuga. Aliquam vero aspernatur nemo vel animi
              dolor temporibus accusantium, mollitia cupiditate, quis optio,
              dolores modi consequuntur doloremque saepe voluptates et ad
              necessitatibus? Reiciendis blanditiis cum velit odio modi
              accusantium, optio saepe beatae, hic neque distinctio in vitae
              quidem pariatur sed aperiam enim? Praesentium voluptate, non
              corrupti facere molestiae earum sit deleniti quae repellendus
              veniam, sint exercitationem consequuntur. Enim, explicabo
              repellat. Perspiciatis optio hic, asperiores doloremque expedita
              pariatur? Architecto ea maxime quia officiis necessitatibus beatae
              deserunt molestias nisi incidunt esse numquam voluptatibus neque
              magnam adipisci eos voluptate sint, animi iure quisquam provident
              soluta repellat sed praesentium? Quas tenetur laudantium minus,
              illum ea delectus omnis quia eos recusandae corporis neque earum
              voluptatibus tempora praesentium. Ad odio reiciendis quisquam quam
              maiores nam atque doloribus ducimus quo minus sequi quaerat
              placeat consequatur dolore alias magni consectetur corrupti,
              laborum ipsam tempore ratione magnam. Ut alias molestias debitis
              earum, asperiores necessitatibus, ipsam culpa, excepturi commodi
              beatae velit veritatis quisquam aperiam voluptatibus qui
              distinctio nobis repellendus molestiae amet. In magni suscipit
              est, saepe soluta velit tenetur magnam provident maxime deserunt,
              explicabo autem perspiciatis excepturi? Dolor consequatur aut rem!
              Porro, itaque maiores iusto exercitationem consectetur facilis ad
              maxime distinctio molestias! Excepturi voluptate numquam ab magnam
              dolores eaque accusantium expedita alias quibusdam quo molestias
              velit culpa aut beatae labore, impedit odit perspiciatis ea
              asperiores quam voluptates suscipit natus dignissimos quidem!
              Tempora, vitae. Iste quos odio repellat tenetur unde in sapiente
              deleniti nobis asperiores, tempora maxime eius iusto placeat,
              officiis, alias quas. Amet consequatur labore provident, natus ea
              omnis, dolores eos reiciendis minima facere incidunt, quas
              aspernatur nobis dignissimos sunt accusamus pariatur. Vero minus
              cupiditate, reiciendis quam blanditiis dolores velit repellendus
              aliquid neque iusto. Voluptates, illum veritatis nulla, modi
              dolore delectus ab odio repellendus, atque deserunt error
              perferendis tempore quo natus quos vero eius vel necessitatibus
              earum? Impedit perspiciatis fugiat officia tempore quasi neque
              dicta ipsum consequatur, nobis dolore ratione iste magnam
              inventore voluptatibus, voluptatum odio laboriosam repellendus
              consequuntur eum, sunt eveniet delectus! Voluptate repellat maxime
              cumque, inventore sit quod quas temporibus dolorem blanditiis
              corrupti ullam officia quisquam accusantium impedit cum mollitia
              voluptatibus enim quis pariatur adipisci. Molestiae perferendis
              facere reiciendis mollitia aspernatur cumque autem fugit porro
              eligendi earum deleniti deserunt nisi, quia natus soluta modi ad
              eius voluptate iusto, eum quasi beatae animi? Laborum autem,
              architecto delectus, provident optio modi laudantium officia
              maxime obcaecati doloribus corrupti esse illo. Tempora quis dolore
              non, illo minus iste ea cumque ducimus ipsa voluptatem quisquam
              unde repellat.
            </div>

            {/* <div className="flex">
<button onClick={() => window.open('https://www.linkedin.com/in/george-gausden/', '_blank')}>
            <svg width="70" height="70" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.8829 1.64227H2.19627C1.55769 1.64227 0.999756 2.10175 0.999756 2.73282V14.4454C0.999756 15.0799 1.55769 15.6453 2.19627 15.6453H13.8794C14.5214 15.6453 15.0028 15.0761 15.0028 14.4454V2.73282C15.0066 2.10175 14.5214 1.64227 13.8829 1.64227ZM5.34039 13.3145H3.33433V7.07721H5.34039V13.3145ZM4.40675 6.12887H4.39237C3.75035 6.12887 3.33464 5.65096 3.33464 5.0527C3.33464 4.44351 3.76129 3.97684 4.41769 3.97684C5.07408 3.97684 5.47573 4.44007 5.49011 5.0527C5.4898 5.65096 5.07408 6.12887 4.40675 6.12887ZM12.672 13.3145H10.6659V9.90407C10.6659 9.08702 10.374 8.52877 9.6482 8.52877C9.0937 8.52877 8.76551 8.90385 8.61954 9.26925C8.56484 9.40052 8.55015 9.57931 8.55015 9.76185V13.3145H6.54409V7.07721H8.55015V7.94521C8.84209 7.52949 9.29812 6.93124 10.3593 6.93124C11.6761 6.93124 12.6723 7.79924 12.6723 9.67058L12.672 13.3145Z" fill="blue"/>
</svg>
</button>
<button onClick={() => window.open('https://www.instagram.com/georgegausden/', '_blank')}>
<svg width="70" height="70" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.0877 2.77555C11.8607 2.77786 12.6015 3.08598 13.1481 3.63262C13.6947 4.17926 14.0029 4.92 14.0052 5.69306V11.5275C14.0029 12.3005 13.6947 13.0413 13.1481 13.5879C12.6015 14.1345 11.8607 14.4427 11.0877 14.445H5.25327C4.48021 14.4427 3.73947 14.1345 3.19283 13.5879C2.64619 13.0413 2.33807 12.3005 2.33576 11.5275V5.69306C2.33807 4.92 2.64619 4.17926 3.19283 3.63262C3.73947 3.08598 4.48021 2.77786 5.25327 2.77555H11.0877ZM11.0877 1.60873H5.25327C3.00685 1.60873 1.16895 3.44663 1.16895 5.69306V11.5275C1.16895 13.7739 3.00685 15.6118 5.25327 15.6118H11.0877C13.3341 15.6118 15.172 13.7739 15.172 11.5275V5.69306C15.172 3.44663 13.3341 1.60873 11.0877 1.60873Z" fill="blue"/>
<path d="M11.9651 5.69805C11.7915 5.69805 11.6218 5.64658 11.4775 5.55013C11.3331 5.45369 11.2206 5.31661 11.1542 5.15623C11.0878 4.99586 11.0704 4.81938 11.1043 4.64912C11.1381 4.47887 11.2217 4.32248 11.3445 4.19973C11.4672 4.07698 11.6236 3.99339 11.7939 3.95952C11.9641 3.92566 12.1406 3.94304 12.301 4.00947C12.4614 4.0759 12.5984 4.1884 12.6949 4.33273C12.7913 4.47707 12.8428 4.64676 12.8428 4.82035C12.843 4.93569 12.8205 5.04993 12.7765 5.15653C12.7325 5.26313 12.6678 5.35998 12.5863 5.44153C12.5047 5.52308 12.4079 5.58773 12.3013 5.63175C12.1947 5.67577 12.0804 5.6983 11.9651 5.69805Z" fill="blue"/>
<path d="M8.17044 6.27525C8.63205 6.27525 9.0833 6.41213 9.46711 6.66859C9.85093 6.92504 10.1501 7.28956 10.3267 7.71603C10.5034 8.1425 10.5496 8.61178 10.4595 9.06452C10.3695 9.51726 10.1472 9.93313 9.82079 10.2595C9.49438 10.5859 9.07851 10.8082 8.62577 10.8983C8.17303 10.9883 7.70375 10.9421 7.27728 10.7655C6.85081 10.5888 6.48629 10.2897 6.22984 9.90586C5.97338 9.52205 5.8365 9.0708 5.8365 8.60919C5.83716 7.99039 6.08327 7.39713 6.52082 6.95957C6.95838 6.52202 7.55164 6.27591 8.17044 6.27525ZM8.17044 5.10843C7.47806 5.10843 6.80122 5.31374 6.22552 5.69841C5.64982 6.08308 5.20112 6.62983 4.93616 7.26951C4.67119 7.90919 4.60187 8.61307 4.73695 9.29216C4.87202 9.97124 5.20544 10.595 5.69503 11.0846C6.18462 11.5742 6.8084 11.9076 7.48748 12.0427C8.16656 12.1778 8.87044 12.1084 9.51012 11.8435C10.1498 11.5785 10.6965 11.1298 11.0812 10.5541C11.4659 9.97841 11.6712 9.30158 11.6712 8.60919C11.6712 7.68073 11.3024 6.7903 10.6459 6.13378C9.98933 5.47726 9.0989 5.10843 8.17044 5.10843Z" fill="blue"/>
</svg>
</button>
</div> */}
          </div>
        )}

        {activeSection === "Biography" && (
          <p className="lg:px-[20%]">{biography?.projects[0].description}</p>
        )}
        {activeSection === "Artist Statement" && (
          <p className="lg:px-[20%]">{biography?.projects[1].description}</p>
        )}
        {activeSection === activeExperiment?.title && (
          <div className="flex flex-col text-center my-24  gap-20">
            <div>
              <h1>{activeExperiment.title}</h1>
              <p>{activeExperiment.description}</p>
              <div className="flex flex-wrap justify-center">
                {activeExperiment.tags?.map((tag, index) => (
                  <div key={index} id="tag">
                    {tag}
                  </div>
                ))}
              </div>
            </div>
            <div
              className={`md:grid ${
                activeExperiment?.links.length === 1
                  ? "md:flex"
                  : "md:grid-cols-2"
              }  gap-10`}
            >
              {activeExperiment?.links.map((link, index) => (
                <div
                  key={index}
                  className="relative flex-shrink-0 group justify-center items-center flex flex-col "
                >
                  {link[0].endsWith(".mp4") ? (
                    <video width="600" height="600" controls>
                      <source src={link[0]} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <Image
                      key={index}
                      src={link[0]}
                      alt={activeExperiment.title}
                      width={300}
                      height={300}
                    />
                  )}
                  <div id="imageCaption">{link[1]}</div>
                </div>
              ))}
            </div>
          </div>
        )}
        {activeSection === activeProject?.title && (
          <div className="flex flex-col gap-20 items-start my-24">
            <div className="w-full justify-center">
              <h1>{activeProject.title}</h1>
              <p className="text-center">{activeProject.description}</p>
              <div className="flex flex-wrap justify-center">
                {activeProject.tags?.map((tag, index) => (
                  <div key={index} id="tag">
                    {tag}
                  </div>
                ))}
              </div>
            </div>

            {activeProject?.links.map((link, index) => (
              <div key={index} className="grid lg:grid-cols-2 gap-20">
                <div className="relative flex-shrink-0 group justify-center items-center flex flex-col ">
                  <Image
                    key={index}
                    src={link[0]}
                    alt={activeProject.title}
                    width={300}
                    height={300}
                  />
                  <div id="imageCaption">{link[1]}</div>
                </div>

                <div className="lg:min-w-[500px]">
                  <h2>{activeProject.text[index][0]}</h2>
                  <p className="md:mr-10">{activeProject.text[index][1]}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        {activeSection === "Email" && (
          <div className="text-3xl">georgegausden at gmail dot com</div>
        )}
      </div>

      {/* <div
        className="fixed bottom-0 left-0 w-full h-[5%] z-30 hidden md:block"
        style={{ background: "linear-gradient(to bottom, #D2D2D2, #C5C5C5)" }}
      ></div> */}
    </div>
  );
}
