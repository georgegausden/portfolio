import Branch from "../components/Branch"

export default function Test() {


  return (
    <div className="w-full h-screen bg-slate-200 grid grid-cols-15 grid-rows-15">
      
<button className="h-10 w-10 bg-black absolute" style={{ left: '25%' }}></button>  
<button className="h-10 w-10 bg-black absolute" style={{ right: '25%' }}></button>  

<button className="h-10 w-10 bg-black absolute" style={{ bottom: '25%', right: '25%' }}></button>  

<button className="h-10 w-10 bg-black absolute" style={{ left: '25%', top: '25%' }}></button>  


    </div>

    // <div className="w-full h-screen bg-pink-50">
    //   <Branch name="About" isActive={true} colour='#FFFFFF' xPosition={25} yPosition={25} />
    //   <Branch name="3D Projects" isActive={true} colour='#F1E7DD' xPosition={75} yPosition={25} />
    //   <Branch name="Contact" isActive={true} colour='#F1E7DD' xPosition={25} yPosition={75} />
    //   <Branch name="Experiments" isActive={true} colour='#F1E7DD' xPosition={75} yPosition={75} />
    // </div>
  )
}