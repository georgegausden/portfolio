import Image from "next/image";

interface ProjectCardProps {
  imageSrc: string;
  imageAlt: string;
  imageCaption: string;
  title: string;
  description: string;
}

export default function ProjectCard({
  imageSrc,
  imageAlt,
  imageCaption,
  title,
  description,
}: ProjectCardProps) {
  return (
    <div className="grid md:grid-cols-2  md:gap-20 items-start">
      
      <div className="relative group flex-shrink-0 md:min-h-[300px] flex flex-col items-center py-5 mx-auto my-auto  justify-center">
        <Image src={imageSrc} alt={imageAlt} width={300} height={400} />
        <div id="imageCaption">{imageCaption}</div>
      </div>
     
      <div className="md:min-w-[500px]">
        <h2>{title}</h2>
        <p className="md:mr-10">{description}</p>
      </div>
      
    </div>
  );
}
