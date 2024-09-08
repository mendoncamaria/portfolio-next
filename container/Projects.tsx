import { FaProjectDiagram } from 'react-icons/fa';
import Title from '../components/Title';
import ProjectCardNew from '../components/ProjectCardNew';
import projectsManager from '../public/img/projectList.png';

const ProjectList = [
  {
    img: projectsManager,
    title: 'Projects Manager Dashboard - Find all Projects i built here',
    link: 'https://projectlist-mendoncamaria.vercel.app/',
  },
];

const Projects = () => {
  return (
    <div className="wrapper">
      <Title text="Projects" icon={<FaProjectDiagram />} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center h-full">
        {ProjectList.map((item, index) => (
          <ProjectCardNew
            img={item.img}
            title={item.title}
            link={item.link}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
