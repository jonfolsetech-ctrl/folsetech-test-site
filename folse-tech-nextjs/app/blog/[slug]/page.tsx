import { posts, type Post } from "@/lib/posts";
import Breadcrumb from "@/components/Breadcrumb";
import type { Metadata } from "next";

export function generateStaticParams() {
  return posts.map((post: Post) => ({ slug: post.slug }));
}

type Props = {
  params: { slug: string };
};

export function generateMetadata({ params }: Props): Metadata {
  const post = posts.find((p: Post) => p.slug === params.slug);
  return {
    title: post ? `${post.title} - Folsetech` : "Post Not Found",
    description: post?.excerpt || "Read our blog posts.",
  };
}

export default function Post({ params }: Props) {
  const post = posts.find((p: Post) => p.slug === params.slug)!;

  const breadcrumbs = [
    { label: "Home", url: "/" },
    { label: "Blog", url: "/blog" },
    { label: post.title, url: `/blog/${post.slug}` }
  ];

  return (
    <>
      <Breadcrumb items={breadcrumbs} />
      <article className="px-4 md:px-6 py-12 md:py-20 max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{post.title}</h1>
        <p className="text-xs md:text-sm text-slate-500 mb-8">By {post.author} on {post.date}</p>
        <div className="prose prose-sm md:prose-lg max-w-none text-slate-700 leading-relaxed whitespace-pre-wrap">{post.content}</div>
      </article>
    </>
  );
}
