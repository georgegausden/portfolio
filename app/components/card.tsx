import Image from 'next/image'
import { getAverageColor } from 'fast-average-color-node';
import {motion} from 'framer-motion';
import Link from 'next/link';


function Card({ project }: { project: any }) {

   
   

    return (
        <Link href={project.link} className="border border-black hover:italic ease-in-out rounded-md overflow-hidden">
            <div className='m-5 hover:scale-[105%] ease-in-out duration-300 overflow-clip z-0'>
                <Image src={project.imageSrc} alt="card" width={300} height={300} className='rounded-md'/>
            </div>

            <div className='border-t border-black z-10'>
                    <h2 className='text-center align-middle m-5'>{project.title}</h2>
            </div>
        </Link>

        
    );
};

export default Card;