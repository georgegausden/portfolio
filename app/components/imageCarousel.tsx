import {motion} from 'framer-motion';

export default function ImageCarousel(){
    return (
        <motion.div>
            <motion.img src='/johnandgen.png'/>
            <motion.img src='/johnandgen2.png'/>
        </motion.div>
    )
}