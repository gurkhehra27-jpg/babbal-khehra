import type { MetadataRoute } from "next";
import { posts } from "@/data/posts";

const BASE_URL = "https://www.babbalkhehra.com";
const SITE_LAUNCH_DATE = new Date("2026-04-29");

function postDate(date: string) {
 const parsed = new Date(date);
 return Number.isNaN(parsed.getTime()) ? SITE_LAUNCH_DATE : parsed;
}

export default function sitemap(): MetadataRoute.Sitemap {
 const latestPostDate = posts.reduce((latest, post) => {
 const current = postDate(post.date);
 return current > latest ? current : latest;
 }, SITE_LAUNCH_DATE);

 const staticPages: MetadataRoute.Sitemap = [
 {
 url: BASE_URL,
 lastModified: latestPostDate,
 changeFrequency: "weekly",
 priority: 1.0,
 images: [`${BASE_URL}/images/photoformainpage.png`],
 },
 {
 url: `${BASE_URL}/vault`,
 lastModified: SITE_LAUNCH_DATE,
 changeFrequency: "monthly",
 priority: 0.9,
 images: [
 `${BASE_URL}/images/alive-cover.png`,
 `${BASE_URL}/images/ego-enlightenment-cover.png`,
 ],
 },
 { url: `${BASE_URL}/blog`, lastModified: latestPostDate, changeFrequency: "weekly", priority: 0.9 },
 { url: `${BASE_URL}/lab`, lastModified: SITE_LAUNCH_DATE, changeFrequency: "monthly", priority: 0.8 },
 { url: `${BASE_URL}/about`, lastModified: SITE_LAUNCH_DATE, changeFrequency: "monthly", priority: 0.7 },
 ];

 const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
 url: `${BASE_URL}/blog/${post.slug}`,
 lastModified: postDate(post.date),
 changeFrequency: "monthly" as const,
 priority: 0.8,
 images: [post.coverImage ? `${BASE_URL}${post.coverImage}` : `${BASE_URL}/images/photoformainpage.png`],
 }));

 return [...staticPages,...blogPages];
}
