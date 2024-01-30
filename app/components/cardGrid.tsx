import Image from 'next/image'
import Card from './card';
import projects from './projects';

function CardGrid() {
    return (
        <div className="grid grid-cols-3 gap-10">
            {projects.map((project, index) => (
                <Card key={index} project={project} />
            ))}
        </div>
    ); 
};

export default CardGrid;