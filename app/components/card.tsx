import Image from 'next/image'

function Card({ project }: { project: any }) {
    return (
        <div className="border hover:italic ease-in-out">
            <div className='m-10 hover:scale-105 ease-in-out duration-300'>
                <Image src={project.imageSrc} alt="card" width={300} height={300} />
            </div>

            <div className='border-t'>
                    <h1 className='text-2xl text-center align-middle m-5'>{project.title}</h1>
            </div>
        </div>
    );
};

export default Card;