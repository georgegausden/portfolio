'use client'
import Link from "next/link";
import Image from "next/image";
import Card from "./components/card";
import projects from "./components/projects";
import CardGrid from "./components/cardGrid";
import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";



export default function Home() {

  const [isMouseOverAbout, setIsMouseOverAbout] = useState(false);
  const [isMouseOver3D, setisMouseOver3D] = useState(false);
  const [isMouseOverContact, setisMouseOverContact] = useState(false);
  const [isMouseOverExperiments, setisMouseOverExperiments] = useState(false);

  return (
    <AnimatePresence>
      <div>
        <h6 className="text-black absolute top-5 right-10 font-extralight">George Gausden</h6>
      </div>
      <motion.main className="grid grid-cols-2 h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
      >
        <div id='about'>

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
              {isMouseOverAbout && <line
                x1='50%'
                y1='50%'
                x2='25%'
                y2='50%'
                stroke='black'
                transform="translate(-20,-20)"
              />}


            </svg>
            <a
            id = 'homepageLink'
              onMouseEnter={() => setIsMouseOverAbout(true)}
              

              style={{
                position: 'absolute',
                bottom: '50%',
                right: '50%',
                backgroundColor: "#F1E7DD"
              }}
              className={`w-32 h-auto m-0 rounded-sm text-center text-transparent hover:w-32 ease-in-out duration-500 transition-all px-2`}>
              <h6 className="text-black">About</h6>
            </a>

            {isMouseOverAbout && <Link href="/about"
              id='homepageLink'
            
              style={{
                position: 'absolute',
                bottom: '50%',
                right: '75%',
                backgroundColor: "#F1E7DD"
              }}
              className={`w-32 px-2 h-auto m-0 text-black ease-in-out duration-500 transition-all`}>
              <h6 className="text-black">Biography</h6>
            </Link>}


          </div>


        </div>

        <div id='3D Projects'>
          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <svg
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            >
              <line
                x1="0%" y1="100%" x2="50%" y2="50%"
                stroke='black'
              />

              {/* draw the lines for the other pages */}
              {isMouseOver3D&&<line
                x1='50%'
                y1='50%'
                x2='75%'
                y2='50%'

                stroke='black'
                transform="translate(20,-20)"
              />}

              {isMouseOver3D&&<line
                x1='50%'
                y1='50%'
                x2='75%'
                y2='75%'

                stroke='black'
                transform="translate(20,-20)"
              />}
            </svg>
            <a
            id = 'homepageLink'
              onMouseEnter={() => setisMouseOver3D(true)}
              
              style={{
                position: 'absolute',
                bottom: '50%',
                left: '50%',
                backgroundColor: "#000000"
              }}

              

              className={`w-10 h-10 m-0 text-transparent rounded-sm text-center hover:w-32 hover:text-white ease-in-out duration-500 transition-all px-2`}>
              <h6>3D Projects</h6>
            </a>

            {isMouseOver3D && <Link id='homepageLink'
              href="/cgi"
              style={{
                position: 'absolute',
                bottom: '50%',
                left: '75%',
                backgroundColor: "#000000"
              }}

              // when the user hovers over one of the links, show the image of the project?
              

              className={`w-32 h-auto m-0 text-white hover:text-white ease-in-out duration-500 transition-all px-2`}>
              <h6>CGI Montreal</h6>
            </Link>}

            {isMouseOver3D && <Link id='homepageLink'
              href="/humanoid"
              style={{
                position: 'absolute',
                bottom: '25%',
                left: '75%',
                backgroundColor: "#000000"
              }}

              // when the user hovers over one of the links, show the image of the project?
              
              className={`w-32 h-auto m-0 text-white hover:text-white ease-in-out duration-500 transition-all px-2`}>
              <h6>Humanoid</h6>
            </Link>}
          </div>
        </div>

        <div id='contact'>
          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <svg
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            >
              <line
                x1="100%" y1="0%" x2="50%" y2="50%"
                stroke='black'
              />

              {/* draw the lines for the other pages */}
              
              {isMouseOverContact && <line
                x1='50%'
                y1='50%'
                x2='25%'
                y2='25%'

                stroke='black'
                transform="translate(-20,20)"
              />}

              {/* draw the lines for the other pages */}
              {isMouseOverContact && <line
                x1='50%'
                y1='50%'
                x2='25%'
                y2='75%'

                stroke='black'
                transform="translate(-20,20)"
              />}

              {/* draw the lines for the other pages */}
              {isMouseOverContact && <line
                x1='50%'
                y1='50%'
                x2='25%'
                y2='50%'

                stroke='black'
                transform="translate(-20,20)"
              />}
            </svg>
            <a
            id = 'homepageLink'
              onMouseEnter={() => setisMouseOverContact(true)}
              style={{
                position: 'absolute',
                top: '50%',
                right: '50%',
                backgroundColor: "#A7B6CA"
              }}

              className={`w-10 h-auto m-0 text-transparent rounded-sm text-center hover:w-32 ease-in-out duration-500 transition-all px-2`}>
              <h6>Contact</h6>
            </a>

            {isMouseOverContact && <Link id='homepageLink'
              href="/CV.pdf" download
              style={{
                position: 'absolute',
                top: '75%',
                right: '75%',
                backgroundColor: "#A7B6CA"
              }}

              className={`w-32 h-auto m-0 text-black ease-in-out duration-500 transition-all px-2`}>
              <h6>CV</h6>
            </Link>}

            {isMouseOverContact && <Link id='homepageLink'
              href="https://www.instagram.com/georgegausden/"
              target="_blank"
              style={{
                position: 'absolute',
                top: '50%',
                right: '75%',
                backgroundColor: "#A7B6CA"
              }}

              className={`w-32 h-auto m-0 text-black ease-in-out duration-500 transition-all px-2`}>
              <h6>Instagram</h6>
            </Link>}

            {isMouseOverContact && <Link id='homepageLink'
             href = "mailto:george.philip.gausden@gmail.com"
              style={{
                position: 'absolute',
                top: '25%',
                right: '75%',
                backgroundColor: "#A7B6CA"
              }}

              className={`w-32 h-auto m-0 text-black ease-in-out duration-500 transition-all px-2`}>
              <h6>Email</h6>
            </Link>}
          </div>
        </div>

        <div id='experiments'>
          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <svg
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            >
              <line
                x1="0%" y1="0%" x2="50%" y2="50%"
                stroke='black'
                style={{
                  animation: 'draw 2s forwards'
                }}
              />

              {isMouseOverExperiments && <line
                x1="50%" y1="50%" x2="75%" y2="75%"
                stroke='black'
                transform="translate(20,20)"
              />}

              {isMouseOverExperiments && <line
                x1="50%" y1="50%" x2="75%" y2="25%"
                stroke='black'
                transform="translate(20,20)"
              />}

              {isMouseOverExperiments && <line
                x1="50%" y1="50%" x2="75%" y2="50%"
                stroke='black'
                transform="translate(20,20)"
              />}

              {isMouseOverExperiments && <line
                x1="50%" y1="50%" x2="50%" y2="75%"
                stroke='black'
                transform="translate(20,20)"
              />}


            </svg>
            <a
            id = 'homepageLink'
            onMouseEnter={() => setisMouseOverExperiments(true)}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                backgroundColor: "#707F6A"
              }}

              className={`w-10 h-auto m-0 text-transparent rounded-sm text-center hover:w-32 ease-in-out duration-500 transition-all px-2`}>
              <h6>Experiments</h6>
            </a>

            {isMouseOverExperiments && <Link id='homepageLink'
              href="/geometries"
              style={{
                position: 'absolute',
                top: '75%',
                left: '75%',
                backgroundColor: "#707F6A",
                cursor: `url('0001.png'), auto`
                
                
              }}

              className={`w-32 h-auto m-0 text-black ease-in-out duration-500 transition-all px-2`}>
              <h6>Geometries</h6>
            </Link>}

            {isMouseOverExperiments && <Link id='homepageLink'
              href="/experiments/Experiment1"
              style={{
                position: 'absolute',
                top: '50%',
                left: '75%',
                backgroundColor: "#707F6A"
              }}

              className={`w-32 h-auto m-0 text-black ease-in-out duration-500 transition-all px-2`}>
              <h6>Experiment #3</h6>
            </Link>}

            {isMouseOverExperiments && <Link id='homepageLink'
              href="/experiments"
              style={{
                position: 'absolute',
                top: '25%',
                left: '75%',
                backgroundColor: "#707F6A"
              }}

              className={`w-32 h-auto m-0 text-black ease-in-out duration-500 transition-all px-2`}>
              <h6>Experiment #2</h6>
            </Link>}

            {isMouseOverExperiments && <Link id='homepageLink'
              href="/experiments"
              style={{
                position: 'absolute',
                top: '75%',
                left: '50%',
                backgroundColor: "#707F6A"
              }}

              className={`w-32 h-auto m-0 text-black ease-in-out duration-500 transition-all px-2`}>
              <h6>Experiment #4</h6>
            </Link>}

          </div>
        </div>



      </motion.main>
    </AnimatePresence>
  );
}







