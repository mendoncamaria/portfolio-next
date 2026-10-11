import { MdWork } from "react-icons/md";
import Title from "../components/Title";
import ExperienceCard from "../components/ExperienceCard";
import { experiencesData } from "@/data/ExperienceData";
import { SectionTitles } from "@/data/TextConstants";



const Experience = () => {
  return (
    <div className="wrapper">
      <Title text={SectionTitles.EXPERIENCE} icon={<MdWork />} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {experiencesData.map((item) => (
          <ExperienceCard
            key={item.id}
            title={item.title}
            subTitle={item.subTitle}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;