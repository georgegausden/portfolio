'use client'

import Image from "next/image";
import Card from "./components/card";
import projects from "./components/projects";
import CardGrid from "./components/cardGrid";
import React, { useEffect, useRef, useState } from 'react';


export default function Home() {
  // const [topics, setTopics] = useState(() => {
  //   const topic1 = new Topic("Experiments", "/experiments", 0, 0, 10, 10, Math.random()*10, Math.random()*10, "#8C9F85");
  //   const topic2 = new Topic("Contact", "/experiments", 0, 400, 10, 10, Math.random()*10, Math.random()*10, "#C7D4E6");
  //   const topic3 = new Topic("About", "/experiments", 150, 0, 10, 10, Math.random()*10, Math.random()*10, '#F1E7DD');
  //   return [topic1, topic2, topic3];
  // });

  // const [frameCount, setFrameCount] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setFrameCount((prevFrameCount) => prevFrameCount + 1);
  //     setTopics((topics) =>
  //       topics.map((topic) => {
  //         return topic;
  //       })
  //     );
  //   }, 10);

  //   return () => clearInterval(interval);
  // }, [frameCount]);

  // console.log(frameCount);

  let openTopics = false;

  


  return (
    <main className="w-full h-screen">

<div className="flex flex-wrap overflow-hidden bg-black">
 <div className="w-1/4  sm:w-full  md:w-full  lg:w-1/5 lg:px-1 lg:my-1 xl:w-full "></div>
 <div className="w-1/4  sm:w-full  md:w-full  lg:w-1/5 lg:px-1 lg:my-1 xl:w-full "></div>
 <div className="w-1/4  sm:w-full  md:w-full  lg:w-1/5 lg:px-1 lg:my-1 xl:w-full "></div>
 <div className="w-1/4  sm:w-full  md:w-full  lg:w-1/5 lg:px-1 lg:my-1 xl:w-full "></div>
 <div className="w-1/4  sm:w-full  md:w-full  lg:w-1/5 lg:px-1 lg:my-1 xl:w-full "></div>
 <div className="w-1/4  sm:w-full  md:w-full  lg:w-1/5 lg:px-1 lg:my-1 xl:w-full "></div>
 <div className="w-1/4  sm:w-full  md:w-full  lg:w-1/5 lg:px-1 lg:my-1 xl:w-full "></div>
 <div className="w-1/4  sm:w-full  md:w-full  lg:w-1/5 lg:px-1 lg:my-1 xl:w-full "></div>
 <div className="w-1/4  sm:w-full  md:w-full  lg:w-1/5 lg:px-1 lg:my-1 xl:w-full "></div>
 <div className="w-1/4  sm:w-full  md:w-full  lg:w-1/5 lg:px-1 lg:my-1 xl:w-full "></div>
 <div className="w-1/4  sm:w-full  md:w-full  lg:w-1/5 lg:px-1 lg:my-1 xl:w-full "></div>
 <div className="w-1/4  sm:w-full  md:w-full  lg:w-1/5 lg:px-1 lg:my-1 xl:w-full "></div>
 <div className="w-1/4  sm:w-full  md:w-full  lg:w-1/5 lg:px-1 lg:my-1 xl:w-full "></div>
 <div className="w-1/4  sm:w-full  md:w-full  lg:w-1/5 lg:px-1 lg:my-1 xl:w-full "></div>
 <div className="w-1/4  sm:w-full  md:w-full  lg:w-1/5 lg:px-1 lg:my-1 xl:w-full "></div>
 <div className="w-1/4  sm:w-full  md:w-full  lg:w-1/5 lg:px-1 lg:my-1 xl:w-full "></div>
 <div className="w-1/4  sm:w-full  md:w-full  lg:w-1/5 lg:px-1 lg:my-1 xl:w-full "></div>
 <div className="w-1/4  sm:w-full  md:w-full  lg:w-1/5 lg:px-1 lg:my-1 xl:w-full "></div>
 <div className="w-1/4  sm:w-full  md:w-full  lg:w-1/5 lg:px-1 lg:my-1 xl:w-full "></div>
  </div>


    </main>
  );
}



class Topic {
  name: string;
  url: string;
  x: number;
  y: number;
  xVelocity: number;
  yVelocity: number;
  centerX: number;
  centerY: number;
  randomX: number;
  randomY: number;
  hovering: boolean = false;
  colour: string;


  constructor(name: string, url: string, x: number, y: number, xVelocity: number = 0, yVelocity: number = 0, randomX: number = Math.random(), randomY: number = Math.random(), colour: string) {
    this.name = name
    this.url = url;
    this.x = x;
    this.y = y;
    this.xVelocity = xVelocity;
    this.yVelocity = yVelocity;
    this.centerX = window?.innerWidth / 2;
    this.centerY = window?.innerHeight / 2;
    this.randomX = randomX;
    this.randomY = randomY;
    this.hovering = false;
    this.colour = colour;
  }

  //display the topic inside of a box
  display(frameCount: number = 0) {

    // this.move(frameCount);

    return (
      <div>

        <svg className="w-full h-screen absolute" style={{ pointerEvents: "none" }}>
          <line x1={this.centerX+5} y1={this.centerY} x2={this.x.toString()} y2={this.y.toString()} style={{ stroke: "black" }} />
        </svg>

        <button
          style={{ 
            // transform: `translate(${this.x}px, ${this.y}px)`, 
            transform: `translate(${this.x}px, ${this.y}px)`,
            backgroundColor: this.colour 
          }}
          className={`w-10 h-10 p-2 uppercase hover:w-64 transition-all ease-in-out duration-500 `}
          onMouseEnter={() => this.hovering = true}
          onMouseLeave={() => this.hovering = false}
        >
          {this.hovering && this.name}
        </button>

        

      </div>
    )
  }

  move(frameCount: number) {
    this.centerX = window?.innerWidth / 2;
    this.centerY = window?.innerHeight / 2;

    this.x = this.centerX / 5 * Math.sin(frameCount / 50 + this.randomX ) + this.centerX;
    this.y = this.centerY / 5 * Math.cos(frameCount / 50 + this.randomY) + this.centerY / 2;
  }
}



