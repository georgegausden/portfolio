import Image from 'next/image';

export type ContentItem = {
    type: 'project' | 'experiment';
    text: string[][];
    title: string;
    description: string;
    tags: string[];
    links: string[][];
    abstract?: string;
  };

type UnifiedSectionProps = {
  selectedItem: ContentItem;
  setActiveSection?: (section: string) => void;
};

export default function UnifiedSection({ selectedItem, setActiveSection }: UnifiedSectionProps) {
  if (!selectedItem || !selectedItem.links) return null;

  const isProject = selectedItem.type === 'project';

  const renderTags = () => (
    <div className="flex flex-wrap justify-center">
      {selectedItem.tags?.map((tag, index) => (
        <div
          key={index}
          id="tag"
          onClick={() => setActiveSection && setActiveSection(`tag-${tag}`)}
          className={'cursor-pointer'}
        >
          {tag}
        </div>
      ))}
    </div>
  );

  const renderMedia = (link: string[], index: number) => (
    <div className="relative flex-shrink-0 group justify-center items-center flex flex-col">
      {link[0].endsWith('.mp4') ? (
        <video width={isProject ? 600 : 500} height={isProject ? 600 : 500} controls>
          <source src={link[0]} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <Image
          key={index}
          src={link[0]}
          alt={selectedItem.title}
          width={isProject ? 600 : 500}
          height={isProject ? 600 : 500}
        />
      )}
      <div id="imageCaption">{link[1]}</div>
    </div>
  );

  const renderProjectContent = () => (
    <div className="flex flex-col gap-10 md:gap-20 items-start my-24">
      <div className="w-full justify-center">
        <h1 className="text-center">{selectedItem.title}</h1>
        <p className="text-center">{selectedItem.description}</p>
        {renderTags()}
      </div>
      {selectedItem.links.map((link, index) => {
        const TextContent = (
          <div className="lg:min-w-[500px]">
            <h2>{selectedItem.text?.[index]?.[0]}</h2>
            <p className="md:mr-10">{selectedItem.text?.[index]?.[1]}</p>
          </div>
        );

        return (
          <div key={index} className="grid lg:grid-cols-2 gap-20">
            {index % 2 === 0 ? (
              <>
                {renderMedia(link, index)}
                {TextContent}
              </>
            ) : (
              <>
                {TextContent}
                {renderMedia(link, index)}
              </>
            )}
          </div>
        );
      })}
    </div>
  );

  const renderExperimentContent = () => (
    <div className="flex flex-col text-center my-24 gap-20">
      <div>
        <h1>{selectedItem.title}</h1>
        <p>{selectedItem.description}</p>
        {renderTags()}
      </div>
      <div
        className={`md:grid ${
          selectedItem.links.length === 1 ? 'md:flex' : 'md:grid-cols-2'
        } gap-10`}
      >
        {selectedItem.links.map((link, index) => renderMedia(link, index))}
      </div>
    </div>
  );

  return isProject ? renderProjectContent() : renderExperimentContent();
}