import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"


interface VideoPlayerProps {
    activeProject: {
      title: string;
      description: string;
      link: string;
    } | null;
    isClicked: boolean;
    handleClick: (buttonInfo: string) => void;
  }



export default function VideoPlayer({ activeProject, isClicked, handleClick }: VideoPlayerProps) {
    return (
        <div>
            <div
        // style={{ left: xPosition, top: yPosition }}
        className=" w-full h-[400px] border-black border relative"
      >
        {/* here is where the image or video of the project goes */}
        
          {activeProject?.link && (
            
              <Image
                src={activeProject.link}
                alt="project"
                layout="fill"
                objectFit="contain"
                
              />
            
          )}
       
<button
  className={`h-20 w-10 bg-[#707F6A] absolute ${
    !isClicked && "animate-pulse"
  }`}
  style={{ top: 0, left: 0, animationDelay: '0s' }} // Top left corner
  onClick={() => handleClick("About")}
></button>

<button
  className={`h-10 w-20 bg-black absolute ${
    !isClicked && "animate-pulse"
  }`}
  style={{ top: 0, right: 0, animationDelay: '0.5s' }} // Top right corner
  onClick={() => handleClick("Experiments")}
></button>



<button
  className={`h-10 w-20 bg-[#9e968f] absolute ${
    !isClicked && "animate-pulse"
  }`}
  style={{ bottom: 0, right: 0, animationDelay: '1s' }} // Bottom right corner
  onClick={() => handleClick("3d")}
></button>

<button
  className={`h-20 w-10 bg-[#A7B6CA] absolute ${
    !isClicked && "animate-pulse"
  }`}
  style={{ bottom: 0, left: 0, animationDelay: '1.5s' }} // Bottom left corner
  onClick={() => handleClick("Contact")}
></button>
        
      </div>

      
        </div>
    )
}