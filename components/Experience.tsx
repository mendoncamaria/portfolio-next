import Title from "./Title";
import { MdWork } from "react-icons/md";
import { SiGooglecloud, SiExercism } from "react-icons/si";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div className="wrapper">
      <Title text="Experiences" icon={<MdWork />} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ExperienceCard
          title="Exercism"
          subTitle="Mentor and Contributor | July 2023 - Present"
          icon={<SiExercism />}
        />
        <ExperienceCard
          title="Niveus Solutions Pvt Ltd"
          subTitle="Associate Cloud Engineer- Frontend Development |  January 2022 - present"
          icon={<SiGooglecloud />}
        />
      </div>
    </div>
  );
};

export default Experience;
