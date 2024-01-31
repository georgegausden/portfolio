import Image from "next/image";

function Humanoid(){
    return(
        <div className="normal-case">
            <h1>Humanoid</h1>

            <p className="pt-5 pr-10 md:w-1/2">{`This project was done in the context of an advanced 3D modelling course. The aim of the project was to conceptualize, model and animate a humanoid character. The tools used were Blender, Adobe Substance Painter, Mixamo and Unity.`}</p>


            <div className="grid md:grid-cols-2 mt-10 gap-10">
                <Image alt="humanoid concept" className="border border-black" width={1000} height={50} src = "/humanoid_concept.webp"></Image>
                <p>{`Here are the three concepts I brainstormed. The trickiest part was to come up with `}</p>
            </div>

            <div className="grid md:grid-cols-2 mt-10 gap-10">
                 <p>{`I eventually settled on the idea of a sort of wire figure that has glowing eyes to give an extra creepy effect in the dark.`}</p>

                <Image alt="humanoid concept" className="border border-black" width={1000} height={50} src = "/concept2.webp"></Image>
            </div>

            <div className="w-full pt-10">
                <iframe width={'100%'} height={720} src="humanoid.mp4"></iframe>
            </div>
            
        </div>
    )

}




export default Humanoid;
