import Image from 'next/image';

export type Project = {
  text: string[][];
  title: string;
  description: string;
  tags: string[];
  links: string[][];
  abstract?: string;
};

type ProjectSectionProps = {
  selectedProject: Project;
  setActiveSection: (section: string) => void;
};

export default function ProjectSection({ selectedProject, setActiveSection }: ProjectSectionProps) {
  if (!selectedProject || !selectedProject.links) return null;

  return (
    <div className="flex flex-col gap-10 md:gap-20 items-start my-24">
      <div className="w-full justify-center">
        <h1 className="text-center">{selectedProject.title}</h1>
        <p className="text-center">{selectedProject.description}</p>
        <div className="flex flex-wrap justify-center">
          {selectedProject.tags?.map((tag, index) => (
            <div
              key={index}
              id="tag"
              onClick={() => setActiveSection(`tag-${tag}`)}
              className="cursor-pointer"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>

      {selectedProject?.links.map((link, index) => {
        const MediaContent = (
          <div className="relative flex-shrink-0 group justify-center items-center flex flex-col">
            {link[0].endsWith('.mp4') ? (
              <video width="600" height="600" controls>
                <source src={link[0]} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <Image
                key={index}
                src={link[0]}
                alt={selectedProject.title}
                width={600}
                height={600}
              />
            )}
            <div id="imageCaption">{link[1]}</div>
          </div>
        );

        const TextContent = (
          <div className="lg:min-w-[500px]">
            <h2>{selectedProject.text[index][0]}</h2>
            <p className="md:mr-10">{renderTextWithLinks(selectedProject.text[index][1])}</p>
          </div>
        );

        return (
          <div key={index} className="grid lg:grid-cols-2 gap-20">
            {index % 2 === 0 ? (
              <>
                {MediaContent}
                {TextContent}
              </>
            ) : (
              <>
                {TextContent}
                {MediaContent}
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}

function renderTextWithLinks(text: string) {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const parts = text.split(urlRegex);
  return parts.map((part, index) => {
    if (urlRegex.test(part)) {
      return (
        <a key={index} href={part} target="_blank" rel="noopener noreferrer">
          {part}
        </a>
      );
    } else {
      return part;
    }
  });
}