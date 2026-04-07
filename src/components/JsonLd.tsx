export function PersonJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Babbal Khehra",
    url: "https://www.babbalkhehra.com",
    sameAs: [
      "https://open.spotify.com/artist/7aKTbZVRNMdWvIPOfS0fgS",
      "https://www.youtube.com/channel/UC9QYIH2FUVSc2Rm45fLllAA",
      "https://www.tiktok.com/@babbal_khehra",
      "https://www.instagram.com/ego_and_enlightenment_book",
    ],
    jobTitle: "Author and Philosopher",
    description:
      "Author of Alive and Ego & Enlightenment. Philosopher and architect of Blueprint Theory — a framework for intentional self-construction.",
    knowsAbout: ["Philosophy", "Consciousness", "Identity", "Blueprint Theory", "Self-discovery"],
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
          "A visceral journey through the corridors of existence. Alive strips away everything comfortable and asks: when you have nothing left, who are you?",
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
          "A philosophical dismantling of the war between self and soul. The ego is not your enemy — it is the door. A framework for understanding consciousness and identity.",
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
      "Official site of Babbal Khehra — author, philosopher, and architect of Blueprint Theory.",
    author: {
      "@type": "Person",
      name: "Babbal Khehra",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.babbalkhehra.com/blog?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
