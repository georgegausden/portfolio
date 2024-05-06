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
      <h2>{project?.title}</h2>
      <p>{project?.description}</p>
    </div>
  )
}