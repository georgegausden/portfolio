'use client'

import Image from "next/image";
import Card from "./components/card";
import projects from "./components/projects";
import CardGrid from "./components/cardGrid";
import React, { useEffect, useRef, useState } from 'react';

import Branch from "./components/branch";


export default function Home() {

  return (
    <main className="grid grid-cols-2 h-screen">
      <Branch x1="100%" y1="100%" x2="50%" y2="50%">
        <Branch x1="0%" y1="0%" x2="-50%" y2="-50%"></Branch>
      </Branch>
      <Branch x1="0%" y1="100%" x2="50%" y2="50%" />
      <Branch x1="100%" y1="0%" x2="50%" y2="50%" />
      <Branch x1="0%" y1="0%" x2="50%" y2="50%" />
      
    </main>
  );
}





