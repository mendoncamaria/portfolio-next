import { SiInformatica } from 'react-icons/si';
import Title from '../components/Title';
import {
  AboutMeDescriptions,
  AboutMeDescriptions_Old,
  SectionTitles,
} from '@/data/TextConstants';

const AboutMe = () => {
  return (
    <div className="wrapper">
      <Title text={SectionTitles.ABOUT_ME} icon={<SiInformatica />} />
      <div className="text-lg tracking-wide gap-6">
        <p>
          {AboutMeDescriptions.DESCRIPTION_1}
          <br />
          <br />
          {AboutMeDescriptions.DESCRIPTION_2}
          <br /> <br />
          {AboutMeDescriptions_Old.DESC_4}
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
