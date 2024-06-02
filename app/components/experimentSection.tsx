import Image from 'next/image';
import { Project } from '../page';

type ExperimentSectionProps = {
  selectedExperiment: Project;
};

export default function ExperimentSection({ selectedExperiment }: ExperimentSectionProps) {
  if (!selectedExperiment || !selectedExperiment.links) return null;

  return (
    <div
      className={`md:grid ${
        selectedExperiment.links.length === 1 ? 'md:flex' : 'md:grid-cols-2'
      } gap-10`}
    >
      {selectedExperiment.links.map((link, index) => (
        <div
          key={index}
          className="relative flex-shrink-0 group justify-center items-center flex flex-col"
        >
          {link[0].endsWith('.mp4') ? (
            <video width="600" height="600" controls>
              <source src={link[0]} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <Image
              key={index}
              src={link[0]}
              alt={selectedExperiment.title}
              width={300}
              height={300}
            />
          )}
          <div id="imageCaption">{link[1]}</div>
        </div>
      ))}
    </div>
  );
}
