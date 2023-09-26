import { FaProjectDiagram } from "react-icons/fa";
import Title from "./Title";
import ProjectCard from "./ProjectCard";
import img from '../public/next.svg';
import weather from '../public/img/weather-img.png';
import quiz from '../public/img/quiz-web.png';
import gradient from '../public/img/gradient-web.png';
import tempConv from '../public/img/temp-conv.png';

const Projects = () => {
  return (
    <div className="wrapper">
      <Title text="Projects" icon={<FaProjectDiagram />} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        <ProjectCard
          img={weather}
          title="Weather Application"
          link="https://weather-mendoncamaria.vercel.app/"
        />
        <ProjectCard
          img={quiz}
          title="Quiz Website"
          link="https://quiz-mendoncamaria.vercel.app/"
        />
        <ProjectCard
          img={gradient}
          title="Gradient Background Generator"
          link="https://gradientbackground-mendoncamaria.netlify.app/"
        />
        <ProjectCard
          img={tempConv}
          title="Project Name"
          link="https://temperatureconverter-mendoncamaria.netlify.app/"
        />
      </div>
    </div>
  );
};

export default Projects;
