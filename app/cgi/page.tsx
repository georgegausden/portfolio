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

function Projects() {
  return (
    <AnimatePresence>
      <motion.div
        className="grid grid-cols-6"
        
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
      >
        <h1 className="col-span-6 mt-0">Montréal Underground</h1>

        <div className="col-span-4">
          <div className=" w-full h-auto  items-center flex justify-center rounded-sm">
            <iframe
              className=" object-cover"
              src="/vfxvideo.mp4"
              width={900}
              height={400}
              
              id="image"
            />
          </div>

          <p id="caption">Caption of Image</p>

          <h2 id="initial-concept">Initial Concept</h2>

          <p>
          A project done in the context of a 3D modelling class. It involved realistically reproducing one part of Montreal’s underground city and then animating on top of it. This project was done in collaboration with Alex Cho. 
          </p>

          <h2 id="first-stage">First Stage</h2>

          <div className=" w-full h-auto bg-gray-200 items-center flex justify-center rounded-sm">
            <Image
              className=" object-cover"
              src="/0001.png"
              width={400}
              height={400}
              alt="Picture of the author"
              id="image"
            />
          </div>
          <p id="caption">Caption of Image</p>

          <p>
          The first stage involved taking pictures in situ of the space. We chose to focus on a specific part of the underground network. We took pictures and measurements and noted them down in a PDF. 
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius sequi
            dolore, quidem asperiores delectus similique voluptatem minus
            voluptatibus aut? Corrupti hic illo harum recusandae excepturi,
            ullam rem molestiae dicta quod vel nihil, nam, amet laborum
            voluptatum itaque a? Qui quis adipisci laborum enim alias non
            recusandae, repellendus iste nihil sit nostrum quod blanditiis
            cumque neque velit quia corporis nesciunt, ipsum et, eligendi
            tenetur deserunt nam. Porro eos error officia dolor eius, quod
            aspernatur sequi placeat. Facere, possimus. Qui ab impedit
            perspiciatis repellat dolorum saepe, mollitia, perferendis nihil
            laudantium in labore quae. Labore exercitationem quia quas ad
            accusamus blanditiis quasi. Assumenda itaque nam neque repellendus
            alias veritatis beatae ea eligendi eius, commodi accusamus. Expedita
            accusamus aperiam, ea possimus maxime quibusdam animi provident
            assumenda facere quia sequi cumque voluptatem enim voluptatibus,
            quidem eum ab atque! Placeat, suscipit facere. Similique hic,
            blanditiis sit facilis explicabo eligendi cum sint sequi aliquam
            architecto odio molestiae accusamus modi iusto itaque, unde nihil
            repellat aperiam suscipit. Dolorem repudiandae adipisci id. Qui quos
            error eaque. Culpa doloremque fugiat rem consequuntur illum aperiam.
            Ex quo at fuga quos, rerum, facere error dolores, laboriosam tempora
            quae illo nam provident et repellendus adipisci? Debitis ullam quam
            cum laboriosam molestias voluptate deserunt!
          </p>

          <h2 id="second-stage">Second Stage</h2>
          <div className=" w-full h-auto bg-gray-200 items-center flex justify-center rounded-sm">
            <Image
              className=" object-cover"
              src="/0001.png"
              width={400}
              height={400}
              alt="Picture of the author"
              id="image"
            />
          </div>

          <p>
          Sculpting the scene using iSpy and Blender. We first had to make sure that the measurements matched with the real world ones. 
          </p>

          <h2 id="third-stage">Third Stage</h2>
          <div className=" w-full h-auto bg-gray-200 items-center flex justify-center rounded-sm">
            <Image
              className=" object-cover"
              src="/0001.png"
              width={400}
              height={400}
              alt="Picture of the author"
              id="image"
            />
          </div>

          <p>
          Texturing and preparing the animation assets. We textured the space and lit it, trying as best as we could to match the conditions of the actual space. We then animated the butterflies and moss to grow up the stairs. We also played around with lighting to try to give the illusion of nature coming into the scene.
          </p>

          <h2 id="final-thoughts">Final Thoughts</h2>
          

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            assumenda dolorem praesentium. Similique incidunt omnis atque quam
            odio mollitia impedit corporis accusantium obcaecati, officiis
            repellendus beatae hic facilis voluptatibus facere?
          </p>

          
        </div>

        <div className="col-span-1">
          <ProjectNavigation />
        </div>
        <div className="col-span-1">
          <Navbar />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Projects;
