'use client'
import { useState, useEffect } from "react";
import Link from "next/link";

import Image from "next/image";
import Navbar from "../components/navbar";
import ProjectNavigation from "../components/projectNavigation";
import { AnimatePresence, motion } from "framer-motion";

interface ExperimentProps {
  title: string;
  date: number;
  description: string;
}

function Projects() {
  return (
    <AnimatePresence>
      <motion.div
        className="grid grid-cols-6"
        
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
      >
        <h1 className="col-span-6 mt-0">Humanoid</h1>

        <div className="col-span-4">
          <div className=" w-full h-auto items-center flex justify-center rounded-sm">
            <iframe
              className=" object-cover"
              src="/GeorgeG_WalkCycle_Final.mp4"
              width={700}
              height={400}
              
              id="image"
            />
          </div>


          <h2 id="initial-concept">Initial Concept</h2>

          <p>
          The prompt for this project was to create a humanoid creature. I had to sculpt, texture, rig and then animate its walk. 
          </p>

          <h2 id="first-stage">First Stage</h2>

          <div className=" w-full h-auto  items-center flex justify-center rounded-sm">
            <Image
              className=" object-cover"
              src="/test.png"
              width={700}
              height={400}
              alt="Picture of the author"
              id="image"
            />
          </div>

          <p>
          Brainstorming ideas for the creature. I played around with different possible creatures that could exist. I came up with 3 different concepts, one duck/man, a book character and the wire character. The main reasons I rejected the other two ideas was because the duck character seemed a bit overdone and the book character wouldn’t walk necessarily in a human way. 
          </p>
          

          <h2 id="second-stage">Second Stage</h2>
          <div className=" w-full h-auto bg-gray-200 items-center flex justify-center rounded-sm">
            <Image
              className=" object-cover"
              src="/refined.png"
              width={700}
              height={400}
              alt="Picture of the author"
              id="image"
            />
          </div>

          <p>
           In the second stage, we had to refine the character. I chose the wire character because it was the most interesting and the most challenging. I had to make sure that the character was humanoid enough to walk like a human. By this stage, I was starting to get a feel for the textures and colours I would want to use. Although later on I would move to a more green palette, the idea of wires being a key feature of the character was already fleshed out.  
          </p>

          <h2 id="third-stage">Third Stage</h2>
          <div className=" w-full h-auto bg-gray-200 items-center flex justify-center rounded-sm">
            <Image
              className=" object-cover"
              src="/0001.png"
              width={400}
              height={400}
              alt="Picture of the author"
              id="image"
            />
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            assumenda dolorem praesentium. Similique incidunt omnis atque quam
            odio mollitia impedit corporis accusantium obcaecati, officiis
            repellendus beatae hic facilis voluptatibus facere?
          </p>

          <h2 id="final-thoughts">Final Thoughts</h2>
          

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            assumenda dolorem praesentium. Similique incidunt omnis atque quam
            odio mollitia impedit corporis accusantium obcaecati, officiis
            repellendus beatae hic facilis voluptatibus facere?
          </p>

          
        </div>

        <div className="col-span-1">
          <ProjectNavigation />
        </div>
        <div className="col-span-1">
          <Navbar />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Projects;
