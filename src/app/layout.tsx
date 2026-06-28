import type { Metadata } from "next";
import { Figtree, Noto_Sans_Telugu } from "next/font/google";
import "./globals.css";

const figtree = Figtree({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800", "900"], variable: "--font-figtree" });
const notoTelugu = Noto_Sans_Telugu({ subsets: ["telugu"], weight: ["400", "600", "700"], variable: "--font-telugu" });

export const metadata: Metadata = {
  metadataBase: new URL("https://devai.coach"),
  title: {
    default: "DevAI - AI Development Course in Hyderabad | AI కోర్సులు తెలుగులో | Full Stack + AI Training",
    template: "%s | DevAI - AI Development Course Hyderabad",
  },
  description:
    "DevAI offers AI-powered fullstack development courses in Hyderabad for Telugu-speaking learners. హైదరాబాద్‌లో AI డెవలప్‌మెంట్ కోర్సులు తెలుగులో నేర్చుకోండి. Master React, Next.js, Python, and AI tools. Best AI coding classes in Telangana & Andhra Pradesh. Upskill with hands-on projects.",
  keywords: [
    "AI development classes Hyderabad",
    "Telugu coding courses",
    "full stack development Telugu",
    "AI courses Telangana",
    "upskill AI Hyderabad",
    "AI training Andhra Pradesh",
    "DevAI coach",
    "learn AI Telugu",
    "హైదరాబాద్ AI కోర్సులు",
    "తెలుగు కోడింగ్ క్లాసులు",
    "AI డెవలప్‌మెంట్ తెలుగు",
    "fullstack development course Hyderabad",
    "React Next.js AI course Telugu",
    "Python AI classes Hyderabad",
    "coding bootcamp Hyderabad Telugu",
    "software development course Telangana",
    "AI upskilling Hyderabad",
    "machine learning course Telugu",
    "web development Telugu classes",
    "best AI course Hyderabad",
  ],
  authors: [{ name: "DevAI", url: "https://devai.coach" }],
  creator: "DevAI",
  publisher: "DevAI",
  alternates: {
    canonical: "https://devai.coach",
    languages: {
      "en-IN": "https://devai.coach",
      "te-IN": "https://devai.coach",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    alternateLocale: ["te_IN"],
    url: "https://devai.coach",
    siteName: "DevAI",
    title: "DevAI - AI Development Course in Hyderabad | AI కోర్సులు తెలుగులో",
    description:
      "Master AI-powered fullstack development in Telugu. హైదరాబాద్‌లో AI డెవలప్‌మెంట్ కోర్సులు. Learn React, Next.js, Python & AI tools with hands-on projects. Best AI coding classes in Telangana & Andhra Pradesh.",
    images: [
      {
        url: "/coach.jpg",
        width: 1200,
        height: 630,
        alt: "DevAI - AI Development Course in Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DevAI - AI Development Course Hyderabad | AI కోర్సులు తెలుగులో",
    description:
      "Master AI-powered fullstack development in Telugu. Best AI coding classes in Hyderabad, Telangana & Andhra Pradesh. Hands-on projects with React, Next.js & AI tools.",
    images: ["/coach.jpg"],
    creator: "@devai_coach",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "kirsWkMdVI1qhBQoRFoSHc3tOgn05kheJEGX-1A5Hlo",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  category: "Education",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      name: "AI-Powered Fullstack Development Course",
      description:
        "Comprehensive AI development course in Hyderabad taught in Telugu. Learn React, Next.js, Python, and AI integration with hands-on projects.",
      provider: {
        "@type": "Organization",
        name: "DevAI",
        url: "https://devai.coach",
        sameAs: ["https://devai.coach"],
      },
      url: "https://devai.coach",
      courseLanguage: ["en", "te"],
      availableLanguage: [
        { "@type": "Language", name: "English", alternateName: "en" },
        { "@type": "Language", name: "Telugu", alternateName: "te" },
      ],
      educationalLevel: "Beginner to Advanced",
      teaches: [
        "AI Development",
        "Full Stack Development",
        "React",
        "Next.js",
        "Node.js",
        "Prompt Engineering",
        "Web Development",
      ],
      hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: "Blended",
        courseWorkload: "PT40H",
        instructor: {
          "@type": "Person",
          name: "DevAI Coach",
        },
        locationCreated: {
          "@type": "Place",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Hyderabad",
            addressRegion: "Telangana",
            addressCountry: "IN",
          },
        },
      },
    },
    {
      "@type": "LocalBusiness",
      name: "DevAI - AI Development Training",
      url: "https://devai.coach",
      image: "https://devai.coach/coach.jpg",
      description:
        "AI-powered fullstack development training institute in Hyderabad offering courses in Telugu and English for learners across Telangana and Andhra Pradesh.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Hyderabad",
        addressRegion: "Telangana",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 17.385,
        longitude: 78.4867,
      },
      areaServed: [
        {
          "@type": "State",
          name: "Telangana",
        },
        {
          "@type": "State",
          name: "Andhra Pradesh",
        },
      ],
      knowsLanguage: ["en", "te"],
      priceRange: "$$",
    },
    {
      "@type": "WebSite",
      name: "DevAI",
      url: "https://devai.coach",
      inLanguage: ["en-IN", "te-IN"],
      potentialAction: {
        "@type": "SearchAction",
        target: "https://devai.coach/?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <meta name="geo.region" content="IN-TG" />
        <meta name="geo.placename" content="Hyderabad" />
        <meta name="geo.position" content="17.385;78.4867" />
        <meta name="ICBM" content="17.385, 78.4867" />
        <meta name="content-language" content="en, te" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="canonical" href="https://devai.coach" />
        {/* Google Analytics 4 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-KWDTLRP8RJ" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-KWDTLRP8RJ');`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${figtree.variable} ${notoTelugu.variable} ${figtree.className}`}>{children}</body>
    </html>
  );
}
