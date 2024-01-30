import Image from "next/image";
import Card from "./components/card";
import projects from "./components/projects";
import CardGrid from "./components/cardGrid";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <CardGrid/>
    </main>
  );
}
