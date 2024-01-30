import Image from 'next/image'
import Card from './card';
import projects from './projects';
import { motion, AnimatePresence } from "framer-motion"


function CardGrid() {
    return (
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {projects.map((project, index) => (
                <Card key={index} project={project} />
            ))}
        </div>
    ); 
};

export default CardGrid;