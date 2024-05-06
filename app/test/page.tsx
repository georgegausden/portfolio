"use client";
import Branch from "../components/Branch";
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

  const buttons = [
    { color: "[#707F6A]", position: { left: xPosition, top: yPosition }, delay: "0s", onClick: () => handleClick("About") },
    { color: "black", position: { right: xPosition, top: yPosition }, delay: "0.35s", onClick: () => handleClick("Experiments") },
    { color: "[#A7B6CA]", position: { right: xPosition, bottom: yPosition }, delay: "0.65s", onClick: () => handleClick("Contact") },
    { color: "[#9e968f]", position: { left: xPosition, bottom: yPosition }, delay: "0.95s", onClick: () => handleClick("3d") },
  ];

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
    <div className="w-full flex h-screen bg-slate-200  ">
      <div
    style={{ left: xPosition, top: yPosition }}
    className="absolute w-[30.5%] h-[54%] translate-y-5 translate-x-5 border-black border"
  >
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

  {buttons.map((button, index) => (
    <button
      key={index}
      className={`h-10 w-10 bg-${button.color} absolute ${!isClicked && "animate-pulse"}`}
      style={{ ...button.position, animationDelay: button.delay }}
      onClick={button.onClick}
    ></button>
  ))}

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
