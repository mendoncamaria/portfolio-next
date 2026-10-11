import { ReactNode } from 'react';
import { SiGooglecloud, SiExercism } from 'react-icons/si';

interface ExperienceItem {
  id: string;
  title: string;
  subTitle: string;
  icon: ReactNode;
}

export const experiencesData: ExperienceItem[] = [
  {
    id: 'niveus',
    title: 'Niveus Solutions Pvt Ltd',
    subTitle:
      'Senior Cloud Frontend Engineer | January 2022 - Present',
    icon: <SiGooglecloud />,
  },
  {
    id: 'exercism',
    title: 'Exercism',
    subTitle: 'Mentor and Contributor | July 2023 - Present',
    icon: <SiExercism />,
  },
];
