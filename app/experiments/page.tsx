import { useState, useEffect } from 'react';
import Link from 'next/link';

interface ExperimentProps {
    title: string;
    date: string;
    description: string;
}

const Experiment: React.FC<ExperimentProps> = ({ title, date, description }) => {
    const href = `/experiments/${encodeURIComponent(title.toLowerCase().replace(/\s+/g, ''))}`; // Convert title to lowercase and remove spaces for the URL

    return (
        <div id='experimentSection'>
            <Link href={href} id='experimentTitle'>{`${title} - ${date}`}</Link>
            <p id='experimentDescription'>{description}</p>
        </div>
    );
};

export const experimentData = [
    {
        title: "Inkflow",
        date: "2022",
        shortDescription: "A collection of p5.js experiments",
        longDescription: "A long collection of p5.js experiments",
        link: "https://editor.p5js.org/georgegausden/full/Q7I0m_H-c"
    },
    {
        title: "2 Experiments",
        date: "2025",
        shortDescription: "A collection of p5.js experiments",
        longDescription: "A long collection of p5.js experiments",
        link: "/experiments"
    },

];




function Experiments(){
    return(
        <div>
            <h1>experiments</h1>
            <p className='pt-10'>{`From time to time, I like to experiment...`}</p>

            {experimentData.map((project, index) => (
                <Experiment 
                    key={index}
                    title={project.title} 
                    date={project.date} 
                    description={project.shortDescription}
                />
            ))}
        </div>
    )
}




export default Experiments;
