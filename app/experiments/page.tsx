'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import { experimentData } from "./experimentData";
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
        
        >Title of Experiment</h1>

        <div className="col-span-4">
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

          <h2 id="Inspiration">Inspiration</h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            assumenda dolorem praesentium. Similique incidunt omnis atque quam
            odio mollitia impedit corporis accusantium obcaecati, officiis
            repellendus beatae hic facilis voluptatibus facere?
          </p>

          <h2 id="Iterations">Iterations</h2>

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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            assumenda dolorem praesentium. Similique incidunt omnis atque quam
            odio mollitia impedit corporis accusantium obcaecati, officiis
            repellendus beatae hic facilis voluptatibus facere?
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

          <h2 id="Final-Result">Final Result</h2>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            assumenda dolorem praesentium. Similique incidunt omnis atque quam
            odio mollitia impedit corporis accusantium obcaecati, officiis
            repellendus beatae hic facilis voluptatibus facere?
          </p>

          
        </div>

        <div className="col-span-1">
          <PageNavigation />
        </div>
        <div className="col-span-1">
          <Navbar />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Experiments;
