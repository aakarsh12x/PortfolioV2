import type { Metadata } from "next";
import { Space_Grotesk, Syne } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import JsonLd from "@/components/JsonLd";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Aakarsh Singh | Full Stack Developer & AI Engineer",
  description: "Aakarsh Singh is a Full Stack Developer & AI Enthusiast specializing in React, Next.js, Node.js, and Cloud Architecture. Building scalable digital experiences.",
  keywords: ["Aakarsh Singh", "Full Stack Developer", "AI Engineer", "React Developer", "Next.js", "Node.js", "Portfolio", "Software Engineer", "Web Development"],
  authors: [{ name: "Aakarsh Singh", url: "http://aakarshsingh.in" }],
  creator: "Aakarsh Singh",
  publisher: "Aakarsh Singh",
  metadataBase: new URL("http://aakarshsingh.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Aakarsh Singh | Full Stack Developer & AI Engineer",
    description: "Building scalable products with React, Node.js & Cloud Architecture. View my portfolio, projects, and experience.",
    url: "http://aakarshsingh.in",
    siteName: "Aakarsh Singh Portfolio",
    images: [
      {
        url: "/og-image.png", // We will need to ensure this exists or use a default
        width: 1200,
        height: 630,
        alt: "Aakarsh Singh Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aakarsh Singh | Full Stack Developer & AI Engineer",
    description: "Building scalable products with React, Node.js & Cloud Architecture.",
    images: ["/og-image.png"], // Reuse the same image
    creator: "@aakarshsingh", // Replace with actual handle if known, or remove
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
  icons: {
    icon: "/image.png",
    shortcut: "/image.png",
    apple: "/image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${syne.variable} antialiased lg:cursor-none`}>
        <CustomCursor />
        <ScrollProgress />
        <div className="noise" />
        <div className="grid-overlay" />
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
