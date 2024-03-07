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
      <Branch rotation={0} />
      <Branch rotation={0} />
      <Branch rotation={90} />
      <Branch rotation={45} />
      
    </main>
  );
}





