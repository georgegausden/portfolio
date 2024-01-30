import Image from 'next/image'
import { getAverageColor } from 'fast-average-color-node';
import {motion} from 'framer-motion';


function Card({ project }: { project: any }) {

   
   

    return (
        <div className="border border-black hover:italic ease-in-out rounded-md opacity-80 hover:opacity-100 transition-opacity duration-500  overflow-hidden">
            <div className='m-5 hover:scale-[120%] ease-in-out duration-300'>
                <Image src={project.imageSrc} alt="card" width={300} height={300} className='rounded-md'/>
            </div>

            <div className='border-t border-black'>
                    <h1 className='text-2xl text-center align-middle m-5'>{project.title}</h1>
            </div>
        </div>

        
    );
};

export default Card;