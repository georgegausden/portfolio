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

function Diorama() {
  return (
    <AnimatePresence>
      <motion.div
        className="grid grid-cols-6"
        
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
      >
        <h1 className="col-span-6 mt-0">Low Poly Diorama</h1>

        <div className="md:col-span-4 sm:col-span-6">
          <div className=" w-full h-auto  items-center flex justify-center  rounded-sm">
            <video
              className=" object-cover"
              src="/0001.mp4"
              width='95%'
              height='100%'
              id="image"
    autoPlay
    loop
    muted
            />
          </div>

         

          <h2 id="Initial Concept">Initial Concept</h2>

          <p>
          This project was done in the context of a 3D modelling course. We had to come up with a low-poly landscape concept, sculpt it and then animate it.  
          </p>

          
        </div>

        <div className="col-span-1 md:visible sm:collapse">
          <ProjectNavigation sections={['Initial Concept',]} />
        </div>
        <div className="col-span-1 md:visible sm:collapse">
          <Navbar />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Diorama;
