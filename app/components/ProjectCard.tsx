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
    <div className="flex gap-20 items-start">
      
      <div className="relative group flex-shrink-0 min-h-[300px] flex flex-col items-center  justify-center">
        <Image src={imageSrc} alt={imageAlt} width={300} height={200} />
        <div id="imageCaption">{imageCaption}</div>
      </div>
     
      <div className="min-w-[500px]">
        <h2>{title}</h2>
        <p className="mr-10">{description}</p>
      </div>
      
    </div>
  );
}
