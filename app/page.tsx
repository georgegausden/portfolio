'use client'

import Image from "next/image";
import Card from "./components/card";
import projects from "./components/projects";
import CardGrid from "./components/cardGrid";

import React, { useEffect, useRef, useState } from 'react';
import { frame } from "framer-motion";




export default function Home() {

  //create an array of topics
  let topic1 = new Topic("Experiments", "/experiments", 200, 10, 10, 10);
  let topic2 = new Topic("Contact", "/experiments", 100, 400, 10, 10);
  let topic3 = new Topic("About", "/experiments", 150, 300, 10, 10);

  let topics = [topic1, topic2, topic3];

  const [frameCount, updateFrame] = useState(0);


  useEffect(() => {
    setTimeout(() => {
      updateFrame((frameCount) => frameCount + 1);
    }, 1);
  });
  


  return (
    <main className=" w-full h-screen">
      {topics.map((topic, index) => (
        <div key={index}>
          {topic.display(frameCount)}
        </div>
      ))}
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
  

  constructor(name: string, url: string, x: number, y: number, xVelocity: number = 0, yVelocity: number = 0) {
    this.name = name
    this.url = url;
    this.x = x;
    this.y = y;
    this.xVelocity = xVelocity;
    this.yVelocity = yVelocity;
    this.centerX = window?.innerWidth / 2;
    this.centerY = window?.innerHeight / 2;
  }

  //display the topic inside of a box
  display(frameCount: number = 0) {

    if(frameCount % 25 == 0){
      this.updateVelocity();
    }

    this.move(frameCount);
    
    return (
      <div>
        
          <svg className="w-full h-screen absolute">
            <line x1={this.centerX} y1={this.centerY} x2={this.x.toString()} y2={this.y.toString()} style={{ stroke: "black" }} />
          </svg>
        
        <button style={{ transform: `translate(${this.x}px, ${this.y}px)` }} className="bg-black text-white w-28 hover:bg-blue-500 p-2 uppercase">{this.name}</button>      
        
      </div>
    )
  }

  move(frameCount:number){
    
    console.log(this.xVelocity, this.yVelocity)
    
    //map the frameCount to the x and y values
    this.x += this.xVelocity * frameCount;
    this.y += this.yVelocity * frameCount;
    
  }

  updateVelocity(){
    this.xVelocity = Math.random();
    this.yVelocity = Math.random();
  }

  
}



function DisplayTopics() {
  

  //create an array of topics
  let topic1 = new Topic("Experiments", "/experiments", 200, 10, 1, 1);
  let topic2 = new Topic("Contact", "/experiments", 100, 400, 2, 2);
  let topic3 = new Topic("About", "/experiments", 150, 300, 1, 1);

  let topics = [topic1, topic2, topic3];



  return (
    <div>
      {topics.map((topic, index) => (
        <div key={index}>
          {topic.display()}
        </div>
      ))}


      
    </div>
  )

}