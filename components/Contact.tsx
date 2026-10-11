import { ContactTexts } from "@/data/TextConstants";
import SocialLink from "./SocialLink";

const Contact = () => {
  return (
    <div className="wrapper">
      <div className="max-w-5xl mx-auto flex flex-col gap-4 items-center justify-center">
        <h2 className="text-2xl font-bold">{ContactTexts.HEADER}</h2>
        <p className="text-lg tracking-wide font-medium text-center">
         {ContactTexts.DESCRIPTION}
        </p>
        <a href="mailto:freelancermariamendonca@gmail.com">
          <button className="w-52 h-14 bg-linear-to-r from-blue-600 via-blue-700 to-indigo-950 text-xl font-bold text-white rounded-lg hover:from-indigo-950 hover:to-blue-600 duration-300">
            {ContactTexts.HELLO_BUTTON}
          </button>
        </a>
      </div>
      <div className="mt-8 flex items-center flex-wrap   gap-8 justify-center">
        <SocialLink title="Github" link="https://github.com/mendoncamaria" />
        <SocialLink
          title="Linkedin"
          link="https://www.linkedin.com/in/mariamendonca/"
        />
        {/* <SocialLink
          title="Goodreads"
          link="https://www.goodreads.com/user/show/118177530-maria-mendonca"
        /> */}
         <SocialLink
          title="Dev.to"
          link="https://dev.to/mendoncamaria"
        />
      </div>
    </div>
  );
};

export default Contact;
