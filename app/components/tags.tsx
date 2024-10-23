import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../page';
import Image from 'next/image';

type TagFilterSectionProps = {
  allProjects: {
    category: string;
    projects: Project[];
  }[];
  selectedTag: string;
  setActiveSection: (section: string) => void;
};

const containerVariants = {
  hidden: {
    opacity: 0,
    transition: {
      staggerChildren: 0.01,
    },
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.01,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export default function TagFilterSection({ 
  allProjects, 
  selectedTag,
  setActiveSection 
}: TagFilterSectionProps) {
  // Get all unique tags from all projects
  const allTags = Array.from(new Set(
    allProjects.flatMap(category => 
      category.projects.flatMap(project => project.tags)
    ).filter(Boolean)
  )).sort();

  // Filter projects that have the selected tag
  const filteredProjects = allProjects.flatMap(category => 
    category.projects.filter(project => 
      project.tags.includes(selectedTag)
    )
  );

  return (
    <div className="flex flex-col gap-10 md:gap-20 items-start my-24">
      {/* Tags Section */}
      <motion.div 
        initial="hidden"
        animate="show"
        exit="hidden"
        variants={containerVariants}
        className="w-full"
      >
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {allTags.map((tag) => (
            <motion.div
              key={tag}
              variants={itemVariants}
              id='tag'
              onClick={() => setActiveSection(`tag-${tag}`)}
              className={`
                cursor-pointer px-4 py-2 rounded-full
                transition-colors duration-200 ease-in-out
                ${tag === selectedTag 
                  ? 'bg-gray-600' 
                  : 'bg-gray-100 hover:bg-gray-200'}
              `}
            >
              {tag}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Filtered Projects */}
      <AnimatePresence mode="wait">
        <motion.div
          initial="hidden"
          animate="show"
          exit="hidden"
          variants={containerVariants}
          className="w-full"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={`${project.title}-${index}`}
              variants={itemVariants}
              className="mb-20"
            >
              <div className="w-full justify-center">
                <h2 className="text-center">{project.title}</h2>
                <p className="text-center">{project.description}</p>
                {/* <div className="flex flex-wrap justify-center">
                  {project.tags?.map((tag, tagIndex) => (
                    <div 
                      key={tagIndex} 
                      id="tag"
                      className={tag === selectedTag ? 'bg-black' : ''}
                    >
                      {tag}
                    </div>
                  ))}
                </div> */}
              </div>

              {project.links?.map((link, linkIndex) => {
                const MediaContent = (
                  <div className="relative flex-shrink-0 group justify-center items-center flex flex-col">
                    {link[0].endsWith('.mp4') ? (
                      <video width="600" height="600" controls>
                        <source src={link[0]} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <Image
                        key={linkIndex}
                        src={link[0]}
                        alt={project.title}
                        width={600}
                        height={600}
                      />
                    )}
                    <div id="imageCaption">{link[1]}</div>
                  </div>
                );

                const TextContent = project.text && project.text[linkIndex] ? (
                  <div className="lg:min-w-[500px]">
                    <h2>{project.text[linkIndex][0]}</h2>
                    <p className="md:mr-10">{project.text[linkIndex][1]}</p>
                  </div>
                ) : null;

                return TextContent ? (
                  <div key={linkIndex} className="grid lg:grid-cols-2 gap-20">
                    {linkIndex % 2 === 0 ? (
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
                ) : (
                  <div key={linkIndex} className="flex justify-center">
                    {MediaContent}
                  </div>
                );
              })}
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}