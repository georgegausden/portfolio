import Image from 'next/image';

export type ContentItem = {
    type: 'project' | 'experiment' | 'website';
    text: string[][];
    title: string;
    description: string;
    tags: string[];
    links: string[][];
    abstract?: string;
    projectUrl?: string; // Add projectUrl here
  };

type UnifiedSectionProps = {
  selectedItem: ContentItem;
  setActiveSection?: (section: string) => void;
};

export default function UnifiedSection({ selectedItem, setActiveSection }: UnifiedSectionProps) {
  if (!selectedItem || !selectedItem.links) return null;

  const isProjectOrWebsite = selectedItem.type === 'project' || selectedItem.type === 'website';

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
        <video width={isProjectOrWebsite ? 600 : 500} height={isProjectOrWebsite ? 600 : 500} controls>
          <source src={link[0]} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <Image
          key={index}
          src={link[0]}
          alt={selectedItem.title}
          width={isProjectOrWebsite ? 600 : 500}
          height={isProjectOrWebsite ? 600 : 500}
        />
      )}
      <div id="imageCaption">{link[1]}</div>
    </div>
  );

  const renderProjectContent = () => {
    // Check if there's any meaningful text content in the selected item's text array
    const hasMeaningfulText =
      selectedItem.text &&
      selectedItem.text.flat().some((s) => s && s.trim() !== '');

    return (
      <div className="flex flex-col gap-10 md:gap-20 items-start my-24">
        {/* Header section: Title, Description, Project URL, Tags */}
        <div className="w-full justify-center">
          <h1 className="text-center">{selectedItem.title}</h1>
          <p className="text-center">{selectedItem.description}</p>
          {selectedItem.projectUrl && (
            <p className="text-center mt-4">
              <a
                href={selectedItem.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-md text-blue-500 border border-blue-500 p-2 rounded-sm hover:bg-blue-500 hover:text-white transition-colors ease-in-out duration-300"
              >
                View Project
              </a>
            </p>
          )}
          {renderTags()}
        </div>

        {/* Content section: Media and Text */}
        {hasMeaningfulText ? (
          // If there is meaningful text, use the alternating media and text layout
          selectedItem.links.map((link, index) => {
            const currentTextPair = selectedItem.text?.[index];
            const hasContentForThisTextPair =
              currentTextPair && currentTextPair.some((s) => s && s.trim() !== '');

            const TextContent = hasContentForThisTextPair ? (
              <div className="lg:min-w-[500px] flex flex-col justify-center">
                {currentTextPair?.[0] && currentTextPair[0].trim() !== '' && (
                  <h2 className="mb-2">{currentTextPair[0]}</h2>
                )}
                {currentTextPair?.[1] && currentTextPair[1].trim() !== '' && (
                  <p className="md:mr-10">{currentTextPair[1]}</p>
                )}
              </div>
            ) : null;

            return (
              <div
                key={index}
                className="grid lg:grid-cols-2 gap-10 md:gap-20 w-full items-start"
              >
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
          })
        ) : (
          // If there is no meaningful text, display all media in a grid
          <div
            className={`grid ${
              selectedItem.links.length === 1
                ? 'md:flex md:justify-center' // Center if only one item
                : 'md:grid-cols-2'
            } gap-10 w-full items-start`}
          >
            {selectedItem.links.map((link, index) =>
              renderMedia(link, index)
            )}
          </div>
        )}
      </div>
    );
  };

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

  return isProjectOrWebsite ? renderProjectContent() : renderExperimentContent();
}