import React from "react";
import project1 from "../assets/projects/project.svg";

interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
}

interface ProjectsProps {
  projects: Project[];
}

const projectsData: Project[] = [
  {
    id: 1,
    name: "molestiae voluptas nam",
    description:
      "Similique neque placeat laboriosam molestias nesciunt quisquam vitae ipsa.",
    image: project1,
  },
  {
    id: 2,
    name: "beatae alias harum",
    description: "In sunt magnam.",
    image: project1,
  },
  {
    id: 3,
    name: "vel voluptatem blanditiis",
    description: "Iure qui hic voluptas perferendis modi ducimus rem sint.",
    image: project1,
  },
  {
    id: 4,
    name: "sed iure magni",
    description: "Sint qui animi omnis.",
    image: project1,
  },
];

const Projects: React.FC<ProjectsProps> = ({ projects }: ProjectsProps) => {
  return (
    <section className="bg-gray-900 min-h-screen flex flex-col justify-center items-center relative text-white z-0">
      <div className="max-w-6xl mx-auto text-center p-4">
        <h2 className="text-4xl font-bold mb-8 tracking-tight">Projekty</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white p-4 rounded-md shadow-md transform transition-transform hover:scale-105 hover:shadow-lg"
            >
              <img
                src={project.image}
                alt={project.name}
                className="mb-4 mx-auto w-32 h-32 md:w-48 md:h-48"
              />
              <h3 className="text-2xl font-semibold mb-2 uppercase text-stone-900">
                {project.name}
              </h3>
              <p className="text-gray-700">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectsContainer: React.FC = () => {
  return <Projects projects={projectsData} />;
};

export default ProjectsContainer;
