import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://novismedia.agency"),
  alternates: {
    canonical: "./",
  },
  title: {
    default: "Novis Media | UGC & AI Ad Creative Agency — Small Spark, Big Reach",
    template: "%s | Novis Media",
  },
  description:
    "Novis Media engineers scroll-stopping UGC and AI-generated video ads that drive predictable ROAS for DTC brands, e-commerce, and high-growth internet companies.",
  keywords: [
    "UGC ad agency",
    "AI ad agency",
    "AI generated video ads",
    "DTC video marketing",
    "social media growth agency",
    "short form video agency",
    "TikTok ad creatives",
    "Meta ad creatives",
    "high converting landing pages",
    "Novis Media",
  ],
  authors: [{ name: "Novis Media" }],
  creator: "Novis Media",
  publisher: "Novis Media",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://novismedia.agency",
    siteName: "Novis Media",
    title: "Novis Media | UGC & AI Ad Creative Agency — Small Spark, Big Reach",
    description:
      "We engineer scroll-stopping UGC and AI-generated video ads that print ROAS for DTC brands and modern companies.",
    images: [
      {
        url: "/novis-logo.png",
        width: 1200,
        height: 1200,
        alt: "Novis Media — Geometric Firefly Mark",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Novis Media | UGC & AI Ad Creative Agency",
    description:
      "Small spark, big reach. Scroll-stopping UGC and AI video ads engineered for maximum ROAS.",
    images: ["/novis-logo.png"],
  },
  icons: {
    icon: [
      { url: "/icon.png", sizes: "32x32" },
      { url: "/novis-logo.png", sizes: "192x192" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
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
};

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Novis Media",
  alternateName: "Novis Creative Media",
  url: "https://novismedia.agency",
  logo: "https://novismedia.agency/novis-logo.png",
  description:
    "Creative performance agency specializing in UGC ads, AI-generated ads, social media management, and high-converting web design.",
  slogan: "Small spark, big reach.",
  sameAs: [
    "https://www.instagram.com/novis.creativemedia",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "creative inquiries",
    url: "https://www.instagram.com/novis.creativemedia",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${inter.variable} h-full antialiased selection:bg-[#3E7A5C] selection:text-[#F3F1EA]`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdOrganization),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#0A0C0A] text-[#F3F1EA] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}

