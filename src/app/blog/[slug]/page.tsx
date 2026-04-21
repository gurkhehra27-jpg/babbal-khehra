import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { posts } from "@/data/posts";
import PostContent from "@/components/PostContent";
import BlogVisual from "@/components/BlogVisual";

export function generateStaticParams() {
 return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
 const { slug } = await params;
 const post = posts.find((p) => p.slug === slug);
 if (!post) return {};
 return {
 title: `${post.title} — Babbal Khehra`,
 description: post.excerpt,
 };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
 const { slug } = await params;
 const post = posts.find((p) => p.slug === slug);
 if (!post) notFound();

 const related = posts
.filter((p) => p.slug!== post.slug && p.category === post.category)
.slice(0, 2);

 return (
 <div className="bg-black min-h-screen">
 {/* ── HERO IMAGE / HEADER ── */}
 <div className="relative w-full">
 {post.coverImage ? (
 <div className="relative w-full h-[55vh] min-h-[360px]">
 <Image
 src={post.coverImage}
 alt={post.title}
 fill
 priority
 className="object-cover"
 />
 <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black" />
 </div>
 ) : (
 <div className="w-full h-[40vh] min-h-[300px] relative overflow-hidden">
 <BlogVisual category={post.category} title={post.title} className="absolute inset-0" />
 <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
 </div>
 )}

 {/* Post header — overlaid on bottom of hero */}
 <div className="relative px-6 pb-16 pt-8 max-w-3xl mx-auto -mt-2">
 <Link
 href="/blog"
 className="inline-flex items-center gap-2 text-[#6b6b8a] text-xs tracking-[0.2em] uppercase font-mono hover:text-[#00e5ff] transition-colors mb-8"
 >
 ← Back to Blog
 </Link>

 <div className="flex items-center gap-4 mb-6">
 <span className="text-[#00e5ff] text-xs tracking-[0.3em] uppercase font-mono border border-[#00e5ff]/30 px-3 py-1">
 {post.category}
 </span>
 <span className="text-[#6b6b8a] text-xs font-mono">{post.readTime}</span>
 </div>

 <h1 className="text-4xl md:text-6xl font-light tracking-tight text-white leading-tight mb-4">
 {post.title}
 </h1>
 <p className="text-[#00e5ff]/60 text-lg italic mb-6">{post.subtitle}</p>

 <div className="flex items-center gap-6 text-xs font-mono text-[#6b6b8a]">
 <span>Babbal Khehra</span>
 <span className="text-[#1a1a2e]">·</span>
 <span>{post.date}</span>
 </div>
 </div>
 </div>

 <div className="h-px bg-gradient-to-r from-transparent via-[#00e5ff]/15 to-transparent" />

 {/* ── BODY ── */}
 <PostContent post={post} related={related} />
 </div>
 );
}
