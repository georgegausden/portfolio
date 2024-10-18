import Image from 'next/image';
import { Project } from '../page';

type ExperimentSectionProps = {
  selectedExperiment: Project;
};

export default function ExperimentSection({ selectedExperiment }: ExperimentSectionProps) {
  if (!selectedExperiment || !selectedExperiment.links) return null;

  return (
    <div className="flex flex-col text-center my-24  gap-20">
            <div>
              <h1>{selectedExperiment.title}</h1>
              <p>{selectedExperiment.description}</p>
              <div className="flex flex-wrap justify-center">
                {selectedExperiment.tags?.map((tag, index) => (
                  <div key={index} id="tag">
                    {tag}
                  </div>
                ))}
              </div>
            </div>
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
              width={500}
              height={500}
            />
          )}
          <div id="imageCaption">{link[1]}</div>
        </div>
      ))}
    </div>
    </div>
  );
}
