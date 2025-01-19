import { SiInformatica } from 'react-icons/si';
import Title from '../components/Title';

const AboutMe = () => {
  return (
    <div className="wrapper">
      <Title text="About Me" icon={<SiInformatica />} />
      <div className="text-lg tracking-wide gap-6">
        <p>
          I&apos;m a passionate full-stack web developer with 3+ years of
          experience crafting intuitive and dynamic web applications. My journey
          began with a deep dive into the banking industry, where I honed my
          skills in building user-centric interfaces. Since then, I&apos;ve been
          actively exploring various facets of web development and staying at
          the forefront of technological advancements.
          <br /><br />
          As a full-stack developer, I&apos;m proficient in both front-end and
          back-end technologies. My expertise lies in ReactJS, Node.js, and
          Cloud platforms like Google Cloud Platform. I&apos;ve successfully led
          modules with 40+ and 120+ microservices, demonstrating my ability to
          manage complex systems and architect scalable solutions.
          <br /><br />
          I&apos;m committed to delivering high-quality code and ensuring
          optimal application performance. My experience in refactoring legacy
          code and optimizing microservices has significantly improved
          application efficiency and maintainability. Additionally, I&apos;m
          skilled in state management, API integration, and testing to ensure
          robust and reliable applications.
          <br /><br />
          Beyond technical skills, I&apos;m a strong problem-solver and
          collaborator. I&apos;ve successfully resolved critical production
          issues, mentored junior developers, and collaborated effectively with
          cross-functional teams. I&apos;m always eager to learn and grow, and
          I&apos;m excited to contribute my skills to challenging and innovative
          projects.
          
          {/* Feel free to explore my portfolio and get in touch with me if you&apos;re
          interested in working together or if you have any questions. Let&apos;s
          bring our ideas to life through the power of web development! */}
          <br />
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
