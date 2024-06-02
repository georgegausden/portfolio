import Image from 'next/image';
import { Project } from '../page';

type ProjectSectionProps = {
  selectedProject: Project;
};

export default function ProjectSection({ selectedProject }: ProjectSectionProps) {
  if (!selectedProject || !selectedProject.links) return null;

  return (
   
    <div className="flex flex-col gap-20 items-start my-24">
    <div className="w-full justify-center">
      <h1 className='text-center'>{selectedProject.title}</h1>
      <p className="text-center">{selectedProject.description}</p>
      <div className="flex flex-wrap justify-center">
        {selectedProject.tags?.map((tag, index) => (
          <div key={index} id="tag">
            {tag}
          </div>
        ))}
      </div>
    </div> 

    {selectedProject?.links.map((link, index) => (
      <div key={index} className="grid lg:grid-cols-2 gap-20">
        <div className="relative flex-shrink-0 group justify-center items-center flex flex-col ">
          <Image
            key={index}
            src={link[0]}
            alt={selectedProject.title}
            width={300}
            height={300}
          />
          <div id="imageCaption">{link[1]}</div>
        </div>

        <div className="lg:min-w-[500px]">
          <h2>{selectedProject.text[index][0]}</h2>
          <p className="md:mr-10">{selectedProject.text[index][1]}</p>
        </div>
      </div>
    ))}
  </div>
  );
}
