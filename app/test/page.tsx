"use client";
// import Branch from "../components/Branch";
import LeftHandBar from "../components/LeftHandBar";
import RightHandBar from "../components/RightHandBar";
import Image from "next/image";
import { SetStateAction, useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Test() {
  const [activeButton, setActiveButton] = useState<string | null>(null);
  const [activeProject, setActiveProject] = useState<{
    title: string;
    description: string;
    link: string;
  } | null>(null);
  const [isClicked, setIsClicked] = useState(false);

  

  const xPosition = "33.333%";
  const yPosition = "20%";

  

  const handleClick = (buttonInfo: string) => {
    setActiveButton(buttonInfo);
    setIsClicked(true);
  };

  const handleProjectClick = (project: {
    title: string;
    description: string;
    link: string;
  }) => {
    setActiveProject(project);
  };

  return (
    <div className="w-full flex h-screen  ">
      <div
        style={{ left: xPosition, top: yPosition }}
        className="absolute w-[30.5%] h-[54%] translate-y-5 translate-x-5 border-black border"
      >
        {/* here is where the image or video of the project goes */}
        <AnimatePresence mode="wait">
          {activeProject?.link && (
            <motion.div
              key={activeProject.link}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <Image
                src={activeProject.link}
                alt="project"
                layout="fill"
                objectFit="contain"
                className="-translate-x-10 -translate-y-10 scale-[90%]"
              />
            </motion.div>
          )}
        </AnimatePresence>{" "}
      </div>

      <button
        className={`h-20 w-10 bg-[#707F6A] absolute   ${
          !isClicked && "animate-pulse"
        }`}
        style={{ left: xPosition, top: yPosition, animationDelay: "0s" }}
        onClick={() => handleClick("About")}
      ></button>
      <button
        className={`h-10 w-20 bg-black absolute   ${
          !isClicked && "animate-pulse"
        }`}
        style={{ right: xPosition, top: yPosition, animationDelay: "0.35s" }}
        onClick={() => handleClick("Experiments")}
      ></button>
      <button
        className={`h-20 w-10 bg-[#A7B6CA] absolute   ${
          !isClicked && "animate-pulse"
        }`}
        style={{ right: xPosition, bottom: yPosition, animationDelay: "0.65s" }}
        onClick={() => handleClick("Contact")}
      ></button>
      <button
        className={`h-10 w-20 bg-[#9e968f] absolute   ${
          !isClicked && "animate-pulse"
        }`}
        style={{ left: xPosition, bottom: yPosition, animationDelay: "0.95s" }}
        onClick={() => handleClick("3d")}
      ></button>

      <div className="w-1/3 h-full">
        <LeftHandBar
          activeButton={activeButton || ""}
          onProjectClick={handleProjectClick || ""}
        />
      </div>

      {/* empty div to make space */}
      <div className="w-1/3 h-full"></div>

      <div className="w-1/3 h-full ">
        <RightHandBar activeProject={activeProject ? activeProject : null} />
      </div>
    </div>
  );
}
