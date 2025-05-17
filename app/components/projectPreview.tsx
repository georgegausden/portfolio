import Image from 'next/image';
import { ContentItem } from './unifiedSection';
import React from 'react'; // Import React

type ProjectPreviewProps = {
  item: ContentItem;
  onClick?: () => void;
};

// Wrap ProjectPreview with React.memo
const ProjectPreview = React.memo(({ item, onClick }: ProjectPreviewProps) => {
  const firstMedia = item.links?.[0];
  if (!firstMedia) return null;

  const handleClick = () => {
    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Then call the original onClick handler
    onClick?.();
  };

  return (
    <div
      className="flex flex-col  cursor-pointer  bg-gray-200 hover:bg-gray-300 p-5 rounded-sm duration-500"
      onClick={handleClick}
    >
      <div className="flex flex-col mt-5 md:mt-0 text-center">
        <h2>{item.title}</h2>
        <p>{item.description}</p>
      </div>
      
      <div className="relative flex-shrink-0 mt-5 flex flex-col items-center w-full">
        <div className="w-full max-w-[400px] aspect-square">
          {firstMedia[0].endsWith('.mp4') ? (
            <video
              width={400}
            height={400}
              className="w-full h-full object-contain hover:scale-100 m-0"
            >
              <source src={firstMedia[0]} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <Image
              src={firstMedia[0]}
              alt={item.title}
              width={400}
              height={400}
              className="w-full h-full object-contain hover:scale-100"
            />
          )}
        </div>
        <div id="imageCaption" className="mt-2 text-center">
          {firstMedia[1]}
        </div>
      </div>
    </div>
  );
});

// Assign a display name for better debugging in React DevTools
ProjectPreview.displayName = 'ProjectPreview';

export default ProjectPreview;