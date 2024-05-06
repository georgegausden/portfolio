import { AnimatePresence, motion } from 'framer-motion';
import projects from '../data/projects.json'

type RightHandBarProps = {
  activeProject: {
    title: string;
    description: string;
    link: string;
  } | null;
};

export default function RightHandBar({ activeProject }: RightHandBarProps) {
  const project = projects.flatMap(category => category.projects).find(project => project.title === activeProject?.title);

  console.log("Active project title:", activeProject?.title);

  return(
    <div className="py-[20%] px-10">
      <AnimatePresence mode='wait'>
        {project && (
          <motion.div
            key={project.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
             // Add this
          >
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}