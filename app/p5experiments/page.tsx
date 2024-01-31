'use client'

import { useState, useEffect } from 'react';

    

const initialBankOfWords = [
    'ideas',
    'experiments',
    'designs',
];




function p5Experiments(){
    return(
        <div>
            <h1>p5 experiments</h1>
            <p>{`From time to time, I like to experiment with p5... Here are some of my sketches.`}</p>


            <div className='grid grid-cols-2'>
                
                <iframe  loading="lazy" width="100%" height="1080px" src="https://www.instagram.com/p/C0Ir--hgtMG/"></iframe>
                <div className='text-center'>
                    <h2>Sketch 1</h2>
                    <p>{`This sketch involved...`}</p>
                </div>
               
                
                <iframe loading="lazy" width="100%" height="1080px" src="https://editor.p5js.org/georgegausden/full/i_k7ko-wa"></iframe>

                

            </div>
        </div>
    )

}




export default p5Experiments;
