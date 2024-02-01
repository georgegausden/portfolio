import { useState, useEffect } from 'react';
import Link from 'next/link';


interface ExperimentProps {
    title: string;
    date: string;
    description: string;
}

const Experiment: React.FC<ExperimentProps> = ({ title, date, description }) => {
    const href = `/experiments/${title.toLowerCase().replace(/\s+/g, '')}`; // Convert title to lowercase and remove spaces for the URL

    return (
        <div id='experimentSection'>
            <Link href={href} id='experimentTitle'>{`${title} - ${date}`}</Link>
            <p id='experimentDescription'>{description}</p>
        </div>
    );
};


function p5Experiments(){
    return(
        <div>
            <h1>experiments</h1>
            <p className='pt-10'>{`From time to time, I like to experiment...`}</p>

           
            <Experiment title='Inkflow' date='2022' description='testing out'></Experiment>

            <Experiment title='Pulses' date='2022' description='testing out'></Experiment>

            <Experiment title='Turbulence' date='2022' description='testing out'></Experiment>
       
        </div>
    )

}




export default p5Experiments;
