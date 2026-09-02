import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MrxBug — Creative Web & App Developer",
  description:
    "MrxBug builds modern digital experiences using Next.js, React and TypeScript.",
  openGraph: {
    title: "MrxBug — Creative Web & App Developer",
    description:
      "Modern digital experiences engineered with clarity, performance and interaction.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MrxBug — Creative Web & App Developer",
    description:
      "Modern digital experiences engineered with clarity, performance and interaction.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
