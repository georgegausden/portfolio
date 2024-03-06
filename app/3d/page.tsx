import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ExperimentProps {
    title: string;
    date: number;
    description: string;
}




function Experiments() {
    return (
        <div>
            <h1>Title of 3D Project</h1>

        
        <div className='grid grid-cols-6 '>

            
            <div className='col-span-4'>
                
                

                <h2 id="initial-concept">Initial Concept</h2>

                <Image
                    src="/0001.png"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                    id='image'
                />
                <p id='caption'>Caption of Image</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel assumenda dolorem praesentium. Similique incidunt omnis atque quam odio mollitia impedit corporis accusantium obcaecati, officiis repellendus beatae hic facilis voluptatibus facere?</p>


                <h2 id = "first-stage">First Stage</h2>

                <Image
                    src="/0001.png"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                    id='image'
                />
                <p id='caption'>Caption of Image</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel assumenda dolorem praesentium. Similique incidunt omnis atque quam odio mollitia impedit corporis accusantium obcaecati, officiis repellendus beatae hic facilis voluptatibus facere?</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius sequi dolore, quidem asperiores delectus similique voluptatem minus voluptatibus aut? Corrupti hic illo harum recusandae excepturi, ullam rem molestiae dicta quod vel nihil, nam, amet laborum voluptatum itaque a? Qui quis adipisci laborum enim alias non recusandae, repellendus iste nihil sit nostrum quod blanditiis cumque neque velit quia corporis nesciunt, ipsum et, eligendi tenetur deserunt nam. Porro eos error officia dolor eius, quod aspernatur sequi placeat. Facere, possimus. Qui ab impedit perspiciatis repellat dolorum saepe, mollitia, perferendis nihil laudantium in labore quae. Labore exercitationem quia quas ad accusamus blanditiis quasi. Assumenda itaque nam neque repellendus alias veritatis beatae ea eligendi eius, commodi accusamus. Expedita accusamus aperiam, ea possimus maxime quibusdam animi provident assumenda facere quia sequi cumque voluptatem enim voluptatibus, quidem eum ab atque! Placeat, suscipit facere. Similique hic, blanditiis sit facilis explicabo eligendi cum sint sequi aliquam architecto odio molestiae accusamus modi iusto itaque, unde nihil repellat aperiam suscipit. Dolorem repudiandae adipisci id. Qui quos error eaque. Culpa doloremque fugiat rem consequuntur illum aperiam. Ex quo at fuga quos, rerum, facere error dolores, laboriosam tempora quae illo nam provident et repellendus adipisci? Debitis ullam quam cum laboriosam molestias voluptate deserunt!</p>

                <h2 id = "second-stage">Second Stage</h2>
                <Image
                    src="/0001.png"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                    id='image'
                />
                <p id='caption'>Caption of Image</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel assumenda dolorem praesentium. Similique incidunt omnis atque quam odio mollitia impedit corporis accusantium obcaecati, officiis repellendus beatae hic facilis voluptatibus facere?</p>


                <h2 id = "third-stage">Third Stage</h2>
                <Image
                    src="/0001.png"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                    id='image'
                />
                <p id='caption'>Caption of Image</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel assumenda dolorem praesentium. Similique incidunt omnis atque quam odio mollitia impedit corporis accusantium obcaecati, officiis repellendus beatae hic facilis voluptatibus facere?</p>


                <h2 id = "final-thoughts">Final Thoughts</h2>
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

            <div className='col-span-1 '>
                <div className='grid grid-rows-5 gap-[100px] text-center text-gray-500 hidden'>
                   
                    <a href='#initial-concept'>Initial Concept</a>
                    <a href="#first-stage">First Stage</a>
                    <a href="#second-stage">Second Stage</a>
                    <a href="#third-stage">Third Stage</a>
                    <a href="#final-thoughts">Final Thoughts</a>

                </div>
                {/* navigation for the experiment page */}
            </div>

            <div className='col-span-1  '>

                <div className='grid grid-rows-5 gap-[100px] text-center text-gray-800'>
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

