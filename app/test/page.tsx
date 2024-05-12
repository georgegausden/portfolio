"use client";
// import Branch from "../components/Branch";
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
    links: string[];
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
    links: string[];
  }) => {
    setActiveProject(project);
  };

  return (
    <div className="grid md:grid-cols-5 grid-cols-1 md:items-center md:h-screen max-w-6xl mx-auto">

      

      <div className="w-full mx-auto" ><LeftHandBar
          activeButton={activeButton || ""}
          onProjectClick={handleProjectClick || ""}
        />
    </div>
        
<div className="col-span-2">
      <VideoPlayer activeProject={activeProject} isClicked={isClicked} handleClick={handleClick}/>

      </div>

      <div className="col-span-2" >
        <RightHandBar activeProject={activeProject} />
      </div>
    </div>
  );
}
