import type { Metadata } from "next";
import { Space_Grotesk, Syne } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

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
  title: "Aakarsh Singh — Developer",
  description: "Full Stack Developer & AI Enthusiast. Building digital experiences.",
  keywords: ["Developer", "React", "Node.js", "AI", "Full Stack"],
  icons: {
    icon: "/image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${syne.variable} antialiased md:cursor-none`}>
        <CustomCursor />
        <ScrollProgress />
        <div className="noise" />
        <div className="grid-overlay" />
        {children}
      </body>
    </html>
  );
}
