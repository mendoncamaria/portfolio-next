import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Experience from "@/container/Experience";
import Footer from "@/components/Footer";
import Projects from "@/container/Projects";
import Skills from "@/container/Skills";
import AboutMe from "@/container/AboutMe";
import CoreAchievementsSection from "@/container/CoreAchievementsSection";
import LatestArticles from "@/container/LatestArticles";
import FeaturedIn from "@/container/FeaturedIn";

export default function Home() {
  return (
    <main className="w-full bg-gray-950 text-gray-300 2xl:px-4 px-10 py-6 lg:py-8">
      <div className="max-w-(--breakpoint-xl) mx-auto lg:pt-10">
        <Banner />
        <AboutMe />
        <Experience />
        <CoreAchievementsSection />
        <FeaturedIn />   
        <Skills />
        <Projects />
        <LatestArticles />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
