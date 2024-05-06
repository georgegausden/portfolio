import projects from '../data/projects.json'
import {motion} from 'framer-motion'

type LeftHandBarProps = {
  activeButton: string;
  onProjectClick: (project: any) => void;
};

export default function LeftHandBar({ activeButton, onProjectClick }: LeftHandBarProps) {
  const activeCategory = projects.find(category => category.category.toLowerCase() === activeButton.toLowerCase());

  return(
    <div className="py-[20%] px-10">
      <h2>{activeButton}</h2>

      {activeCategory?.projects.map((project, index) => (
  <div key={index} className='py-2'>
    {project.title === 'CV' ? (
      <button onClick={() => window.open(project.link, '_blank')}>{project.title}</button>
    ) : project.title === 'Email' ? (
      <button onClick={() => window.location.href = `mailto:${project.link}`}>{project.title}</button>
    ) : (
      <button onClick={() => onProjectClick(project)}>{project.title}</button>
    )}
  </div>
))}
    </div>
  )
}