import Branch from "../components/Branch"

export default function Test(){
    // create an array of branches
    const branches = [

        // main branch in the center of the website
        {name: "main", isActive: true, xPosition: 50, yPosition: 50 },
        {name : "About", isActive: true, xPosition: 25, yPosition: 25},



        // add more branches as needed
    ];
    
    

    return(
        <div className="w-full h-screen bg-pink-50">
            
            <Branch parent={branches[0]} name="About" isActive={true} xPosition={25} yPosition={25}></Branch>

            <Branch parent={branches[1]} name="Biography" isActive={true} xPosition={25} yPosition={10}></Branch>
            <Branch parent={branches[1]} name="Biography" isActive={true} xPosition={10} yPosition={10}></Branch>
            <Branch parent={branches[1]} name="Biography" isActive={true} xPosition={10} yPosition={25}></Branch>



            <Branch parent={branches[0]} name="3D Projects" isActive={true} xPosition={75} yPosition={25}></Branch>
            <Branch parent={branches[0]} name="Contact" isActive={true} xPosition={25} yPosition={75}></Branch>
            <Branch parent={branches[0]} name="Experiments" isActive={true} xPosition={75} yPosition={75}></Branch>





        </div>
    )
} 