import { posts } from "@/lib/posts";
import Breadcrumb from "@/components/Breadcrumb";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Folsetech",
  description: "Read insights on AI web design, SQL optimization, and web development.",
};

export default function Blog() {
  const breadcrumbs = [
    { label: "Home", url: "/" },
    { label: "Blog", url: "/blog" }
  ];

  return (
    <>
      <Breadcrumb items={breadcrumbs} />
      <section className="px-4 md:px-6 py-12 md:py-16 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-slate-900">Folsetech Blog</h1>
        <div className="grid gap-4 md:gap-6">
          {posts.map(post => (
            <a key={post.slug} href={`/blog/${post.slug}`} className="block p-4 md:p-6 border border-gray-200 hover:border-blue-600 hover:shadow-md rounded-lg transition bg-white">
              <h2 className="text-lg md:text-2xl font-bold text-slate-900 hover:text-blue-600 mb-2">{post.title}</h2>
              <p className="text-sm md:text-base text-slate-600 mb-2 md:mb-3">{post.excerpt}</p>
              {post.date && <p className="text-xs md:text-sm text-slate-500">Published {post.date}</p>}
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
