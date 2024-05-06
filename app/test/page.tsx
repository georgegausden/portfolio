'use client'
import Branch from "../components/Branch";
import LeftHandBar from "../components/LeftHandBar";
import RightHandBar from "../components/RightHandBar";
import Image from 'next/image'
import { SetStateAction, useState, useEffect } from "react";

export default function Test() {
  const [activeButton, setActiveButton] = useState<string | null>(null);
  const [activeProject, setActiveProject] = useState<{ title: string; description: string; link: string } | null>(null);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (buttonInfo: string) => {
    setActiveButton(buttonInfo);
    setIsClicked(true);

  };

  const handleProjectClick = (project: { title: string; description: string; link: string }) => {
    setActiveProject(project);
  };

 


  

  return (
    <div className="w-full flex h-screen bg-slate-200 ">
      <div
        style={{ left: "33.333%", top: "20%" }}
        className="absolute w-[30.5%] h-[54%] translate-y-5 translate-x-5 border-black border"
      >

        {/* here is where the image or video of the project goes */}
        {activeProject?.link && <Image src={activeProject.link} alt="project" layout="fill" objectFit="contain" className="-translate-x-10 -translate-y-10 scale-[90%]"  />}
      </div>

      <button
      className={`h-10 w-10 bg-[#707F6A] absolute   ${!isClicked && 'animate-pulse'}`}
      style={{ left: "33.333%", top: "20%", animationDelay: '0s' }}
      onClick = {() => handleClick('About')}
      ></button>
      <button
      className={`h-10 w-10 bg-black absolute   ${!isClicked && 'animate-pulse'}`}
      style={{ right: "33.333%", top: "20%", animationDelay: '0.35s' }}
      onClick = {() => handleClick('Experiments')}
      ></button>
      <button
      
      className={`h-10 w-10 bg-[#A7B6CA] absolute   ${!isClicked && 'animate-pulse'}`}
      style={{ right: "33.333%", bottom: "20%", animationDelay: '0.65s' }}
      onClick = {() => handleClick('Contact')}
      ></button>
      <button
      
      className={`h-10 w-10 bg-[#9e968f] absolute   ${!isClicked && 'animate-pulse'}`}
      style={{ left: "33.333%", bottom: "20%", animationDelay: '0.95s' }}
      onClick = {() => handleClick('3d')}
      ></button>

      <div className="w-1/3 h-full">
      <LeftHandBar activeButton = {activeButton || ""} onProjectClick={handleProjectClick || ""}/>
      </div>

      {/* empty div to make space */}
      <div className="w-1/3 h-full"></div>

      <div className="w-1/3 h-full ">
        <RightHandBar activeProject={activeProject ? activeProject : null} />
      </div>

    </div>
  );
}
