import React, { useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../page';
import ProjectPreview from './projectPreview';

type TagFilterSectionProps = {
  allProjects: {
    category: string;
    projects: Project[];
  }[];
  selectedTag: string;
  setActiveSection: (section: string) => void;
  setActiveCategory: (category: string) => void;
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
  setActiveSection,
  setActiveCategory
}: TagFilterSectionProps) {
  // Get all unique tags from all projects
  const allTags = Array.from(new Set(
    allProjects.flatMap(category => 
      category.projects.flatMap(project => project.tags)
    ).filter(Boolean)
  )).sort();

  const filteredProjects = allProjects.flatMap(category => {
    const projectType: 'project' | 'experiment' = 
      category.category.toLowerCase() === 'projects' ? 'project' : 'experiment';
    
    return category.projects.filter(project =>
      project.tags.includes(selectedTag)
    ).map(project => ({
      ...project,
      type: projectType,
      categoryName: category.category
    }));
  });

  // Memoize the onClick handler for ProjectPreview
  const handleProjectPreviewClick = useCallback((itemTitle: string, categoryName: string) => {
    setActiveSection(itemTitle);
    setActiveCategory(categoryName);
  }, [setActiveSection, setActiveCategory]);

  const handleTagClick = useCallback((tag: string) => {
    setActiveSection(`tag-${tag}`);
    setActiveCategory("");
  }, [setActiveSection, setActiveCategory]);

  return (
    <div className="flex flex-col gap-10 items-start my-24">
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
              onClick={() => handleTagClick(tag)} // Use memoized handler
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

      {/* Filtered Projects Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          initial="hidden"
          animate="show"
          exit="hidden"
          variants={containerVariants}
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20"
        >
          {filteredProjects.map((item, index) => (
            <motion.div
              key={`${item.title}-${index}`}
              variants={itemVariants}
              className="w-full"
            >
              <ProjectPreview
                item={item}
                onClick={() => handleProjectPreviewClick(item.title, item.categoryName)} // Use memoized handler
              />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}