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
    <div className="flex flex-col md:flex-row gap-20 items-start">
      
      <div className="relative group flex-shrink-0 min-h-[300px] flex flex-col items-center">
        <Image src={imageSrc} alt={imageAlt} width={400} height={300} />
        <div id="imageCaption">{imageCaption}</div>
      </div>
     
      <div className="min-w-[500px] w-auto">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
