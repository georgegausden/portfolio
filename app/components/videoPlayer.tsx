import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"


interface VideoPlayerProps {
  activeProject: {
    title: string;
    description: string;
    links: string[]; // Change this line
  } | null;
  isClicked: boolean;
  handleClick: (buttonInfo: string) => void;
}

export default function VideoPlayer({ activeProject, isClicked, handleClick }: VideoPlayerProps) {
  return (
    <div>
      <div
        // style={{ left: xPosition, top: yPosition }}
        className=" w-auto h-[500px] drop-shadow-md  border-black border relative"
      >
        {/* here is where the image or video of the project goes */}

        <div>
          {activeProject?.links && activeProject.links.map((link, index) => (
          <Image
            key={index}
            src={link}
            alt={`project ${index}`}
            layout="fill"
            objectFit="contain"
          />
        ))}
        </div>

        <button
          className={`h-[50px] w-[50px]  bg-[#707F6A] absolute ${!isClicked && "animate-pulse"
            }`}
          id='videoPlayerButton'
          style={{ top: 0, left: 0, animationDelay: '0s' }} // Top left corner
          onClick={() => handleClick("About")}
        ></button>

        <button
          className={`h-[50px] w-[50px] bg-black absolute ${!isClicked && "animate-pulse"
            }`}
          id='videoPlayerButton'
          style={{ top: 0, right: 0, animationDelay: '0.5s' }} // Top right corner
          onClick={() => handleClick("Experiments")}
        ></button>



        <button
          className={`h-[50px] w-[50px] bg-[#9e968f] absolute ${!isClicked && "animate-pulse"
            }`}
          id='videoPlayerButton'
          style={{ bottom: 0, right: 0, animationDelay: '1s' }} // Bottom right corner
          onClick={() => handleClick("3d")}
        ></button>

        <button
          className={`h-[50px] w-[50px] bg-[#A7B6CA] absolute ${!isClicked && "animate-pulse"
            }`}
          id='videoPlayerButton'
          style={{ bottom: 0, left: 0, animationDelay: '1.5s' }} // Bottom left corner
          onClick={() => handleClick("Contact")}
        ></button>

      </div>


    </div>
  )
}