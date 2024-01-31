import Image from "next/image";

function studioNewkid(){
    return(
        <div className="normal-case">
            <h1>Studio NewKid</h1>

            <p className="pt-5">{`For the last few months, I've been involved in a project of creating content and exploring different ways to market a local bag making business located in the Mile End neighbourhood in Montréal. I've been responsible for the digital photography and web design aspects of the project.`}</p>

            <div className="grid grid-cols-3">
            <Image width={300} height={900} alt="Bag" src={'/newkid1.webp'} className="pt-10"></Image>
            <Image width={300} height={900} alt="Bag" src={'/newkid2.webp'} className="pt-10"></Image>
            <Image width={300} height={900} alt="Bag" src={'/newkidgif.gif'} className="pt-10"></Image>
            <Image width={300} height={900} alt="Bag" src={'/newkid3.webp'} className="pt-10"></Image>


            </div>

        </div>
    )

}




export default studioNewkid;
