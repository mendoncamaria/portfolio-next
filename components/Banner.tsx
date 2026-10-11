import { BannerTexts } from '@/data/TextConstants';

const Banner = () => {
  const getJobRole = () => BannerTexts.JOB_ROLE;

  return (
    <div className="wrapper flex flex-col md:flex-row items-center gap-10">
      <div className="w-3/4 flex flex-col items-center md:items-start gap-4">
        <h1 className="text-6xl  font-bold text-white">{BannerTexts.NAME}</h1>
        <h3 className="text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-linear-to-r from-blue-300 via-red-300 to-indigo-300 tracking-wide">
          {getJobRole()}
        </h3>

        <p className="text-base tracking-wide text-center md:text-left">
          {BannerTexts.DESCRIPTION}
        </p>
      </div>
    </div>
  );
};

export default Banner;
