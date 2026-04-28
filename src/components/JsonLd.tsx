export function PersonJsonLd() {
 const schema = {
 "@context": "https://schema.org",
 "@type": "Person",
 name: "Babbal Khehra",
 url: "https://www.babbalkhehra.com",
 sameAs: [
 "https://www.instagram.com/babbal_khehra/",
 "https://open.spotify.com/artist/7aKTbZVRNMdWvIPOfS0fgS",
 "https://www.youtube.com/channel/UC9QYIH2FUVSc2Rm45fLllAA",
 "https://www.tiktok.com/@babbal_khehra",
 ],
 jobTitle: "Community-Facing Digital Creator",
 description:
 "Community-facing digital creator using websites, AI, storytelling, and public-facing media to build visibility, trust, and opportunity.",
 knowsAbout: [
 "Digital Creation",
 "Community Building",
 "AI Systems",
 "Website Development",
 "Civic Engagement",
 "Storytelling",
 "Content Strategy",
 ],
 };

 return (
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
 />
 );
}

export function BooksJsonLd() {
 const schema = {
 "@context": "https://schema.org",
 "@graph": [
 {
 "@type": "Book",
 name: "Alive",
 author: {
 "@type": "Person",
 name: "Babbal Khehra",
 url: "https://www.babbalkhehra.com",
 },
 url: "https://amzn.asia/d/01UfATi7",
 bookFormat: "https://schema.org/Paperback",
 datePublished: "2025",
 description:
 "A visceral journey through the corridors of existence. Alive strips away everything comfortable and asks a single question: when you have nothing left, who are you?",
 genre: ["Philosophy", "Fiction"],
 inLanguage: "en",
 offers: {
 "@type": "Offer",
 url: "https://amzn.asia/d/01UfATi7",
 seller: { "@type": "Organization", name: "Amazon" },
 },
 },
 {
 "@type": "Book",
 name: "Ego & Enlightenment",
 author: {
 "@type": "Person",
 name: "Babbal Khehra",
 url: "https://www.babbalkhehra.com",
 },
 url: "https://amzn.asia/d/0bXshqi8",
 bookFormat: "https://schema.org/Paperback",
 datePublished: "2025",
 description:
 "A philosophical dismantling of the war between self and soul. The ego is not your enemy. It is the door. A framework for understanding consciousness and identity.",
 genre: ["Philosophy", "Self-Help", "Psychology"],
 inLanguage: "en",
 offers: {
 "@type": "Offer",
 url: "https://amzn.asia/d/0bXshqi8",
 seller: { "@type": "Organization", name: "Amazon" },
 },
 },
 ],
 };

 return (
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
 />
 );
}

export function WebsiteJsonLd() {
 const schema = {
 "@context": "https://schema.org",
 "@type": "WebSite",
 name: "Babbal Khehra",
 url: "https://www.babbalkhehra.com",
 description:
 "Official site of Babbal Khehra, community-facing digital creator using websites, AI, storytelling, and public-facing media to build visibility, trust, and opportunity.",
 author: {
 "@type": "Person",
 name: "Babbal Khehra",
 },
 };

 return (
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
 />
 );
}
