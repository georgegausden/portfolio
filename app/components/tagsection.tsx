import projects from "../data/projects.json";

// Define interfaces for type safety
interface Project {
  title: string;
  description: string;
  tags: string[];
  links: string[][];
  text: string[][];
}

interface Category {
  category: string;
  projects: Project[];
}

// Function to get all unique tags
const getAllUniqueTags = (data: Category[]) => {
  const uniqueTags = new Set<string>();
  
  data.forEach(category => {
    if (category.projects) {
      category.projects.forEach(project => {
        if (project.tags) {
          project.tags.forEach(tag => uniqueTags.add(tag));
        }
      });
    }
  });

  return Array.from(uniqueTags).sort();
};

// TagSection component
const TagSection = () => {
  const allTags = getAllUniqueTags(projects);
  
  return (
    <div>
      {allTags.map((tag, index) => (
        <div key={index}>{tag}</div>
      ))}
    </div>
  );
};

export default TagSection;