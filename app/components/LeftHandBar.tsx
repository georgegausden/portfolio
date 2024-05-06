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
          <button onClick={() => onProjectClick(project)}>{project.title}</button>
        </div>
      ))}
    </div>
  )
}