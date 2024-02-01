'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';

function p5Experiments(){
    return(
        <div>
            <h1>experiments</h1>
            <p className='pt-10'>{`From time to time, I like to experiment...`}</p>


            <div id='experimentSection'>
                <Link href={'/'} id = 'experimentTitle'>Flowing Fields - 2023</Link>
                <p id='experimentDescription'>{`Flowing through fields, drifting away...`}</p>
            </div>

            <div id='experimentSection'>
                <Link href={'/lines'} id = 'experimentTitle'>InkFlow - 2022</Link>
                <p id='experimentDescription'>{`Flowing through fields, drifting away...`}</p>
            </div>

            <div id='experimentSection'>
                <Link href={'/'} id = 'experimentTitle'>Flowing Fields - 2023</Link>
                <p id='experimentDescription'>{`Flowing through fields, drifting away...`}</p>
            </div>
            
        </div>
    )

}




export default p5Experiments;
