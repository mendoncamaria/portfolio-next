import { FaProjectDiagram } from "react-icons/fa";
import Title from "./Title";
import ProjectCard from "./ProjectCard";
import img from '../public/next.svg'

const Projects = () => {
  return (
    <div className="wrapper">
      <Title text="Projects" icon={<FaProjectDiagram />} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        <ProjectCard
          img={img}
          title="Project Name"
          link=""
        />
      </div>
    </div>
  );
};

export default Projects;
