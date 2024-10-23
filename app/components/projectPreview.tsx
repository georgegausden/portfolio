import Image from 'next/image';
import { ContentItem } from './unifiedSection';

type ProjectPreviewProps = {
  item: ContentItem;
  onClick?: () => void;
};

export default function ProjectPreview({ item, onClick }: ProjectPreviewProps) {
  const firstMedia = item.links?.[0];
  
  if (!firstMedia) return null;

  return (
    <div 
      className="flex flex-col gap-6 cursor-pointer hover:opacity-80 bg-gray-200 p-5 rounded-sm transition-opacity duration-200"
      onClick={onClick}
    >
      <div className="flex flex-col gap-2 text-center">
        <h2>{item.title}</h2>
        <p>{item.description}</p>
      </div>
      
      <div className="relative flex-shrink-0 group justify-center items-center">
        {firstMedia[0].endsWith('.mp4') ? (
          <video 
            width={400} 
            height={400} 
            controls
            className="w-full h-auto"
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
            className="w-full h-auto"
          />
        )}
        <div id="imageCaption" className="mt-2 text-center">
          {firstMedia[1]}
        </div>
      </div>
    </div>
  );
}