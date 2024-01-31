import Image from "next/image";

function vfx(){
    return(
        <div className="normal-case">
            <h1>vfx</h1>

            <p>{`This project was done in the context of an advanced 3D modelling course at university. It consisted in exploring the underground city of Montréal, taking measurements at the location, taking pictures of the site of the textures and structures, then modelling them out in Blender using iSpy.`}</p>

            <div className="grid grid-cols-2 pt-10 gap-5">
                <Image src = '/vfx2.webp' alt='Original File' height={900} width={900}></Image>
                <p>This was the picture that was taken in situ. </p>
            </div>

            <div className="grid grid-cols-2 pt-10 gap-5">
                <p>This was the recreationg of the image. </p>
                <Image src = '/vfx.webp' alt='Original File' height={900} width={900}></Image>
            </div>

            <div className="pt-10">
                <iframe width={'100%'} height={'500'} src="vfxvideo.mp4"></iframe>
            </div>


            
           
        </div>
    )

}




export default vfx;
