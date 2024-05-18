import { SiInformatica } from 'react-icons/si';
import Title from './Title';

const Aboutme = () => {
  return (
    <div className="wrapper">
      <Title text="About Me" icon={<SiInformatica />} />
      <div className="text-lg tracking-wide flex flex-col gap-6">
        <p>
          I&apos;m a passionate web developer with 2 years of experience
          building user-friendly and dynamic web applications. My journey began
          by contributing to a banking website, which provided valuable insights
          into the industry and solidified my foundation in crafting intuitive
          interfaces. While I honed my skills on this large-scale project,
          I&apos;ve also actively pursued personal endeavors to explore various
          facets of web development and stay ahead of the curve.
          <br />
          One of my key areas of expertise is ReactJS. I&apos;m a lifelong learner
          with a constant drive to improve. I&apos;m eager to collaborate with
          like-minded individuals and teams on challenging and exciting projects
          within the ever-evolving field of web development.
          <br />
          {/* Feel free to explore my portfolio and get in touch with me if you&apos;re
          interested in working together or if you have any questions. Let&apos;s
          bring our ideas to life through the power of web development! */}
          <br />
        </p>
      </div>
    </div>
  );
};

export default Aboutme;
