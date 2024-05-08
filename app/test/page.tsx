"use client";
// import Branch from "../components/Branch";
import LeftHandBar from "../components/LeftHandBar";
import RightHandBar from "../components/RightHandBar";
import Image from "next/image";
import { SetStateAction, useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import VideoPlayer from "../components/videoPlayer";

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
    <div className="grid md:grid-cols-3 grid-cols-1 md:items-center">

      

      <div className="w-full" ><LeftHandBar
          activeButton={activeButton || ""}
          onProjectClick={handleProjectClick || ""}
        />
    </div>
        
<div>
      <VideoPlayer activeProject={activeProject} isClicked={isClicked} handleClick={handleClick}/>

      </div>

      <div >
        <RightHandBar activeProject={activeProject ? activeProject : null} />
      </div>
    </div>
  );
}
