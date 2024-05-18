import { FaProjectDiagram } from 'react-icons/fa';
import Title from './Title';
import ProjectCard from './ProjectCard';
import img from '../public/next.svg';
import weather from '../public/img/weather-img.png';
import quiz from '../public/img/quiz-web.png';
import gradient from '../public/img/gradient-web.png';
import tempConv from '../public/img/temp-conv.png';
import todoList from '../public/img/TodoList.png';

const ProjectList = [
  {
    img: weather,
    title: 'Weather Application',
    link: 'https://weather-mendoncamaria.vercel.app/',
  },
  {
    img: quiz,
    title: 'Quiz Website',
    link: 'https://quiz-mendoncamaria.vercel.app/',
  },
  {
    img: gradient,
    title: 'Gradient Background Generator',
    link: 'https://gradientbackground-mendoncamaria.netlify.app/',
  },
  {
    img: tempConv,
    title: 'Temperature Conversion',
    link: 'https://temperatureconverter-mendoncamaria.netlify.app/',
  },
  {
    img: todoList,
    title: 'Todo List',
    link: 'https://mariamendonca-todo-app.netlify.app/',
  },
];

const Projects = () => {
  return (
    <div className="wrapper">
      <Title text="Projects" icon={<FaProjectDiagram />} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        {ProjectList.map((item, index) => (
          <ProjectCard
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
