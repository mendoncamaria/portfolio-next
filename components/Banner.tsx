import Image from 'next/image';
import ProfileImg from '../public/img/profilepic.jpeg';

const Banner = () => {
  const getJobRole = () =>
    `Full Stack Developer   |   Code Mentor   |   Continuous Learner`;

  return (
    <div className="wrapper flex flex-col md:flex-row items-center gap-10">
      <div className="w-3/4 flex flex-col items-center md:items-start gap-4">
        <h1 className="text-6xl  font-bold text-white">Maria Mendonca</h1>
        <h3 className="text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-red-300 to-indigo-300 tracking-wide">
        {getJobRole()}
        </h3>

        <p className="text-base tracking-wide text-center md:text-left">
          I design and code beautifully simple things, and I love what I do.
        </p>
      </div>
    </div>
  );
};

export default Banner;
