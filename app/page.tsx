'use client'
import Link from "next/link";
import Image from "next/image";
import Card from "./components/card";
import projects from "./components/projects";
import CardGrid from "./components/cardGrid";
import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";

import Branch from "./components/branch";


export default function Home() {

  const [isMouseOver, setIsMouseOver] = useState(false);

  return (
    <AnimatePresence>
      <motion.main className="grid grid-cols-2 h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
      >
        <div>

          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <svg
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            >
              <line
                x1='100%'
                y1='100%'
                x2='50%'
                y2='50%'
                stroke='black'
              />

              {/* draw the lines for the other pages */}
              <line
                x1='50%'
                y1='50%'
                x2='25%'
                y2='50%'
                stroke='black'
                transform="translate(-20,-20)"
              />


            </svg>
            <a
              onMouseEnter={() => setIsMouseOver(true)}
              onMouseLeave={() => setIsMouseOver(false)}
              style={{
                position: 'absolute',
                bottom: '50%',
                right: '50%',
                backgroundColor: "#F1E7DD"
              }}
              className={`w-10 h-auto m-0 text-black hover:w-auto ease-in-out duration-500 transition-all px-2`}>
              <h6>About</h6>
            </a>

            <Link href="/about"
              id='homepageLink'
              onMouseEnter={() => setIsMouseOver(true)}
              onMouseLeave={() => setIsMouseOver(false)}
              style={{
                position: 'absolute',
                bottom: '50%',
                right: '75%',
                backgroundColor: "#F1E7DD"
              }}
              className={`w-auto px-2 h-auto m-0 text-black ease-in-out duration-500 transition-all`}>
              <h6>Biography</h6>
            </Link>


          </div>


        </div>

        <div>
          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <svg
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            >
              <line
                x1="0%" y1="100%" x2="50%" y2="50%"
                stroke='black'
              />

              {/* draw the lines for the other pages */}
              <line
                x1='50%'
                y1='50%'
                x2='75%'
                y2='50%'




                stroke='black'
                transform="translate(0,-20)"
              />
            </svg>
            <a
              style={{
                position: 'absolute',
                bottom: '50%',
                left: '50%',
                backgroundColor: "#000000"
              }}

              className={`w-10 h-auto m-0 text-white hover:w-auto hover:text-white ease-in-out duration-500 transition-all px-2`}>
              <h6>3D Projects</h6>
            </a>

            <Link id='homepageLink'
              href="/3d"
              style={{
                position: 'absolute',
                bottom: '50%',
                left: '75%',
                backgroundColor: "#000000"
              }}

              className={`w-auto h-auto m-0 text-white hover:text-white ease-in-out duration-500 transition-all px-2`}>
              <h6>Low Poly Diorama</h6>
            </Link>
          </div>
        </div>

        <div>
          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <svg
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            >
              <line
                x1="100%" y1="0%" x2="50%" y2="50%"
                stroke='black'
              />

              {/* draw the lines for the other pages */}
              <line
                x1='50%'
                y1='50%'
                x2='25%'
                y2='25%'

                stroke='black'
                transform="translate(-20,20)"
              />

              {/* draw the lines for the other pages */}
              <line
                x1='50%'
                y1='50%'
                x2='25%'
                y2='75%'

                stroke='black'
                transform="translate(-20,20)"
              />
            </svg>
            <a
              style={{
                position: 'absolute',
                top: '50%',
                right: '50%',
                backgroundColor: "#A7B6CA"
              }}

              className={`w-10 h-auto m-0 text-black hover:w-auto ease-in-out duration-500 transition-all px-2`}>
              <h6>Contact</h6>
            </a>

            <Link id='homepageLink'
              href="/contact"
              style={{
                position: 'absolute',
                top: '75%',
                right: '75%',
                backgroundColor: "#A7B6CA"
              }}

              className={`w-auto h-auto m-0 text-black ease-in-out duration-500 transition-all px-2`}>
              <h6>CV</h6>
            </Link>

            <Link id='homepageLink'
             href = "mailto: george.philip.gausden@gmail.com"
              style={{
                position: 'absolute',
                top: '25%',
                right: '75%',
                backgroundColor: "#A7B6CA"
              }}

              className={`w-auto h-auto m-0 text-black ease-in-out duration-500 transition-all px-2`}>
              <h6>Email</h6>
            </Link>
          </div>
        </div>

        <div>
          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <svg
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            >
              <line
                x1="0%" y1="0%" x2="50%" y2="50%"
                stroke='black'
              />

              <line
                x1="50%" y1="50%" x2="75%" y2="75%"
                stroke='black'
                transform="translate(20,20)"
              />

              <line
                x1="50%" y1="50%" x2="75%" y2="25%"
                stroke='black'
                transform="translate(20,20)"
              />

              <line
                x1="50%" y1="50%" x2="75%" y2="50%"
                stroke='black'
                transform="translate(20,20)"
              />

              <line
                x1="50%" y1="50%" x2="50%" y2="75%"
                stroke='black'
                transform="translate(20,20)"
              />


            </svg>
            <a
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                backgroundColor: "#707F6A"
              }}

              className={`w-10 h-auto m-0 text-black hover:w-auto ease-in-out duration-500 transition-all px-2`}>
              <h6>Experiments</h6>
            </a>

            <Link id='homepageLink'
              href="/experiments"
              style={{
                position: 'absolute',
                top: '75%',
                left: '75%',
                backgroundColor: "#707F6A"
              }}

              className={`w-auto h-auto m-0 text-black ease-in-out duration-500 transition-all px-2`}>
              <h6>Geometries</h6>
            </Link>

            <Link id='homepageLink'
              href="/experiments"
              style={{
                position: 'absolute',
                top: '50%',
                left: '75%',
                backgroundColor: "#707F6A"
              }}

              className={`w-auto h-auto m-0 text-black ease-in-out duration-500 transition-all px-2`}>
              <h6>Experiment #3</h6>
            </Link>

            <Link id='homepageLink'
              href="/experiments"
              style={{
                position: 'absolute',
                top: '25%',
                left: '75%',
                backgroundColor: "#707F6A"
              }}

              className={`w-auto h-auto m-0 text-black ease-in-out duration-500 transition-all px-2`}>
              <h6>Experiment #2</h6>
            </Link>

            <Link id='homepageLink'
              href="/experiments"
              style={{
                position: 'absolute',
                top: '75%',
                left: '50%',
                backgroundColor: "#707F6A"
              }}

              className={`w-auto h-auto m-0 text-black ease-in-out duration-500 transition-all px-2`}>
              <h6>Experiment #4</h6>
            </Link>

          </div>
        </div>



      </motion.main>
    </AnimatePresence>
  );
}







