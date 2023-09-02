import React from "react";

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
    name: "Projekt 1",
    description: "TO DO",
    image: "",
  },
  {
    id: 2,
    name: "Projekt 2",
    description: "TO DO",
    image: "",
  },
  {
    id: 3,
    name: "Projekt 3",
    description: "TO DO",
    image: "",
  },
];

const Projects: React.FC<ProjectsProps> = ({ projects }: ProjectsProps) => {
  return (
    <section className="bg-gray-900 h-screen flex flex-col justify-center items-center relative text-white z-0">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 tracking-tight">
          Moje Projekty
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-white p-4 rounded-md shadow-md">
              <img src={project.image} alt={project.name} className="mb-4" />
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
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
