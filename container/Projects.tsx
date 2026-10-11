import { FaProjectDiagram } from 'react-icons/fa';
import Title from '../components/Title';
import ProjectCardNew from '../components/ProjectCardNew';

import { SectionTitles } from '@/data/TextConstants';
import { ProjectList } from '@/data/ProjectsData';

const Projects = () => {
  return (
    <div className="wrapper">
      <Title text={SectionTitles.PROJECTS} icon={<FaProjectDiagram />} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center h-full">
        {ProjectList.map((item, index) => (
          <ProjectCardNew
            img={item.img}
            title={item.title}
            link={item.link}
            key={index+item.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
