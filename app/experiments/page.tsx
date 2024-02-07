import { useState, useEffect } from 'react';
import Link from 'next/link';
import { experimentData } from './experimentData';

interface ExperimentProps {
    title: string;
    date: number;
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


function sortExperiments(experiments: any[]){
    return experiments.sort((a, b) => b.date - a.date);
}





function Experiments(){
    const sortedExperiments = sortExperiments(experimentData);
    return(
        <div>
            <h1>experiments</h1>
            <p className='pt-10'>{`From time to time, I like to experiment...`}</p>
            {sortedExperiments.map((project, index) => (
                <Experiment 
                    key={index}
                    title={project.title} 
                    date={project.date} 
                    description={project.shortDescription}
                />
            ))}
        </div>
    );
}




export default Experiments;
