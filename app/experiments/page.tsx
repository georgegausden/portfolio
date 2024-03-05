import { useState, useEffect } from 'react';
import Link from 'next/link';
import { experimentData } from './experimentData';
import Image from 'next/image';

interface ExperimentProps {
    title: string;
    date: number;
    description: string;
}




function Experiments() {
    return (
        <div>
            <h1>Title of Experiment</h1>

        
        <div className='grid grid-cols-6 '>

            
            <div className='col-span-4'>
                
                

                <h2>Initial Concept</h2>

                <Image
                    src="/0001.png"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                    id='image'
                />
                <p id='caption'>Caption of Image</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel assumenda dolorem praesentium. Similique incidunt omnis atque quam odio mollitia impedit corporis accusantium obcaecati, officiis repellendus beatae hic facilis voluptatibus facere?</p>


                <Image
                    src="/0001.png"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                    id='image'
                />
                <p id='caption'>Caption of Image</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel assumenda dolorem praesentium. Similique incidunt omnis atque quam odio mollitia impedit corporis accusantium obcaecati, officiis repellendus beatae hic facilis voluptatibus facere?</p>

                <Image
                    src="/0001.png"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                    id='image'
                />
                <p id='caption'>Caption of Image</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel assumenda dolorem praesentium. Similique incidunt omnis atque quam odio mollitia impedit corporis accusantium obcaecati, officiis repellendus beatae hic facilis voluptatibus facere?</p>


                {/* where i should put the experiment information */}
            </div>

            <div className='col-span-1 bg-red-400 sticky '>
                <div className='grid grid-rows-5 gap-[200px] text-center text-gray-500 '>
                   
                    <Link href='/'>Initial Concept</Link>
                    <Link href='/'>First Stage</Link>
                    <Link href='/'>Second Stage</Link>

                </div>
                {/* navigation for the experiment page */}
            </div>

            <div className='col-span-1 bg-purple-100 '>

                <div className='grid grid-rows-5 gap-[200px] text-center text-gray-800'>
                    <Link href='/'>Home</Link>
                    <Link href='/'>Project 1</Link>
                    <Link href='/'>Project 2</Link>
                    <Link href='/'>Project 3</Link>

                </div>
                {/* navigation for the experiment page */}
            </div>



        </div>
        </div>
    )
}




export default Experiments;
