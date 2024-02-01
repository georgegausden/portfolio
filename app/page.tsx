import Image from "next/image";
import Card from "./components/card";
import projects from "./components/projects";
import CardGrid from "./components/cardGrid";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">

      {/* <div className="flex flex-col items-center justify-center mx-[10em] px-10 text-center h-screen ">
        <input className="text-center w-full h-100 text-3xl bg-black outline-none mx-10"></input>
      </div> */}

      
      <CardGrid/>
    </main>
  );
}
