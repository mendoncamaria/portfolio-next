import Title from "@/components/Title";
import { SectionTitles } from "@/data/TextConstants";
import Image from "next/image";
import { FaRegNewspaper } from "react-icons/fa";

type DevToPost = {
  id: number;
  title: string;
  description: string;
  url: string;
  cover_image: string | null;
  published_at: string;
  reading_time_minutes: number;
  tag_list: string[];
};

async function getArticles(): Promise<DevToPost[]> {
  try {
    const res = await fetch(
      "https://dev.to/api/articles?username=mendoncamaria&per_page=3",
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    return await res.json();
  } catch {
    return [];
  }
}

export default async function LatestArticles() {
  const posts = await getArticles();
  if (posts.length === 0) return null; // hides the section if nothing loads

  return (
    <section className="wrapper">
     <Title text={SectionTitles.LATEST_ARTICLES} icon={<FaRegNewspaper />} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {posts.map((post) => (
          <a
            key={post.id}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-slate-900/60 border border-slate-800 hover:border-indigo-500/50 rounded-xl overflow-hidden transition-all duration-300 flex flex-col"
          >
            {post.cover_image && (
              <Image
                src={post.cover_image}
                alt={post.title}
                width={600}
                height={300}
                className="w-full h-40 object-cover"
              />
            )}
            <div className="p-5 flex flex-col gap-2 grow">
              <h3 className="text-base font-semibold text-slate-100 group-hover:text-indigo-300 transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-slate-400 line-clamp-3">{post.description}</p>
              <p className="mt-auto pt-3 text-xs text-slate-500">
                {new Date(post.published_at).toLocaleDateString("en-IN", {
                  dateStyle: "medium",
                })}{" "}
                · {post.reading_time_minutes} min read
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}