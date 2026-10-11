import Title from "@/components/Title";
import { featuredArticles } from "@/data/FeaturesData";
import { SectionTitles } from "@/data/TextConstants";
import { MdFeaturedPlayList } from "react-icons/md";

export default function FeaturedIn() {
  return (
    <section className="wrapper">
      <Title text={SectionTitles.FEATURED} icon={<MdFeaturedPlayList />} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {featuredArticles.map((f) => (
          <a
            key={f.url}
            href={f.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-slate-900/60 border border-slate-800 hover:border-indigo-500/50 rounded-xl p-5 transition-all duration-300"
          >
            <p className="text-xs uppercase tracking-wider text-indigo-400 font-semibold">
              {f.name}
            </p>
            <h3 className="mt-2 text-base font-semibold text-slate-100 group-hover:text-indigo-300 transition-colors">
              {f.title}
            </h3>
            <p className="mt-3 text-xs text-slate-500">{f.date}</p>
          </a>
        ))}
      </div>
    </section>
  );
}