'use client'

import Image from "next/image";
import Card from "./components/card";
import projects from "./components/projects";
import CardGrid from "./components/cardGrid";
import React, { useEffect, useRef, useState } from 'react';
import {motion, AnimatePresence} from "framer-motion";

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
      <Branch x1="100%" y1="100%" x2="50%" y2="50%" index={1} color="#707F6A">
        <Branch x1="0%" y1="0%" x2="-50%" y2="-50%" index={1} color="#707F6A"></Branch>
      </Branch>
      <Branch x1="0%" y1="100%" x2="50%" y2="50%" index={2} color="#000000"/>
      <Branch x1="100%" y1="0%" x2="50%" y2="50%" index={3} color="#A7B6CA" />
      <Branch x1="0%" y1="0%" x2="50%" y2="50%" index={4} color="#707F6A" />
      
    </motion.main>
    </AnimatePresence>
  );
}





