import {motion} from 'framer-motion';
import Image from 'next/image';

export default function ImageCarousel(){
    return (
        <motion.div>
            <div>
                <Image 
                    src="/johnandgen.png"
                    alt="Carousel image 1"
                    width={3732}
                    height={2322}
                />
            </div>
            <div>
                <Image 
                    src="/johnandgen2.png"
                    alt="Carousel image 2"
                    width={3732}
                    height={2322}
                />
            </div>
        </motion.div>
    )
}