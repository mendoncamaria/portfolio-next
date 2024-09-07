import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Experience from "@/container/Experience";
import Footer from "@/components/Footer";
import Projects from "@/container/Projects";
import Skills from "@/container/Skills";
import AboutMe from "@/container/AboutMe";

export default function Home() {
  return (
    <main className="w-full bg-gray-950 text-gray-300 px-4">
      <div className="max-w-screen-xl mx-auto lg:pt-10">
        <Banner />
        <AboutMe />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
