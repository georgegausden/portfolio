import Branch from "../components/Branch"

export default function Test() {


  return (
    <div className="w-full h-screen bg-pink-50">
      <Branch name="About" isActive={false} xPosition={25} yPosition={25}>
        <Branch name="Biography" isActive={false} xPosition={25} yPosition={10} />
      </Branch>
      <Branch name="3D Projects" isActive={true} xPosition={75} yPosition={25} />
      <Branch name="Contact" isActive={true} xPosition={25} yPosition={75} />
      <Branch name="Experiments" isActive={true} xPosition={75} yPosition={75} />
    </div>
  )
}