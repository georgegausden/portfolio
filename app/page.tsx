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
            </svg>
            <Link href="/experiments"
              style={{
                position: 'absolute',
                bottom: '50%',
                right: '50%',
                backgroundColor: "#F1E7DD"
              }}

              className={`w-10 h-auto m-0 text-black hover:w-32 ease-in-out duration-500 transition-all pl-2`}>
              <h6>Experiments</h6>
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
            </svg>
            <Link href="/experiments"
              style={{
                position: 'absolute',
                bottom: '50%',
                left: '50%',
                backgroundColor: "#000000"
              }}

              className={`w-10 h-auto m-0 text-white hover:w-32 ease-in-out duration-500 transition-all pl-2`}>
              <h6>Experiments</h6>
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
            </svg>
            <Link href="/experiments"
              style={{
                position: 'absolute',
                top: '50%',
                right: '50%',
                backgroundColor: "#A7B6CA"
              }}

              className={`w-10 h-auto m-0 text-white hover:w-32 ease-in-out duration-500 transition-all pl-2`}>
              <h6>Experiments</h6>
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
            </svg>
            <Link href="/experiments"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                backgroundColor: "#707F6A" 
              }}

              className={`w-10 h-auto m-0 text-white hover:w-32 ease-in-out duration-500 transition-all pl-2`}>
              <h6>Experiments</h6>
            </Link>
          </div>
        </div>

      

      </motion.main>
    </AnimatePresence>
  );
}





