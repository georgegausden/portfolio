/* eslint-disable react/no-unescaped-entities */
'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/navbar";
import PageNavigation from "../components/experimentNavigation";
import { AnimatePresence, motion } from "framer-motion";

interface ExperimentProps {
  title: string;
  date: number;
  description: string;
}

function Experiments() {
  return (
    <AnimatePresence>
      <motion.div
        className="grid grid-cols-6"
        
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
      >
        <h1 className="col-span-6 mt-0"
        
        >Geometries</h1>

        <div className="col-span-4">
          <div className=" w-full h-auto bg-gray-100  items-center flex justify-center rounded-sm">
            <Image
              className=" object-cover"
              src="/geometries1.jpg"
              width={500}
              height={400}
              alt="Picture of the author"
              id="image"
            />
          </div>

          

          <h2 id="Inspiration">Inspiration</h2>

          <p>
          I've always been interested in the way that trigonometric functions can be used to create complex shapes. I wanted to experiment with this concept and see how far I could push it. Most of the iterations involved combining sine, cosine and tangent functions in different ways to create interesting patterns. 
          </p>

          <h2 id="Iterations">Iterations</h2>

          <div className=" w-full h-auto bg-gray-100  items-center flex justify-center rounded-sm">
            <Image
              className=" object-cover"
              src="/geometries2.jpg"
              width={500}
              height={400}
              alt="Picture of the author"
              id="image"
            />
          </div>
          <div className=" w-full h-auto mt-5 bg-gray-100 items-center flex justify-center rounded-sm">
            <Image
              className=" object-cover"
              src="/geometries3.jpg"
              width={500}
              height={400}
              alt="Picture of the author"
              id="image"
            />
          </div>
         

          

        </div>

        <div className="col-span-1">
          <PageNavigation sections={['Inspiration', 'Iterations']}  />
        </div>
        <div className="col-span-1">
          <Navbar />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Experiments;
