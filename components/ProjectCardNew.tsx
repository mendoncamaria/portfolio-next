import Image from 'next/image';

interface Props {
  title: string;
  link: string;
  img: any;
}

const ProjectCardNew = ({ title, link, img }: Props) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block w-full"
    >
      <div className="overflow-hidden rounded-xl border border-slate-800 group-hover:border-indigo-500/50 transition-all duration-300">
        <Image
          src={img}
          alt={title}
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="w-full h-auto aspect-video object-cover object-top"
        />
        <p className="py-2 px-3 bg-blue-600 text-white text-center font-semibold">
          {title}
        </p>
      </div>
    </a>
  );
};

export default ProjectCardNew;
