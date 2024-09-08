import Image from 'next/image';
interface Props {
  title: string;
  link: string;
  img: any;
}

const ProjectCardNew = ({ title, link, img }: Props) => {
  return (
    <a href={link} target="_blank">
      <div>
        <Image src={img} alt="Project" />
        <p className="flex py-1 bg-blue-600 text-white text-center font-semibold duration-300 justify-center">
          {title}
        </p>
      </div>
    </a>
  );
};

export default ProjectCardNew;
