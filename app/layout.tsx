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
  title: "Funngro | Real Projects. Real Experience.",
  description:"Funngro connects young talent with real brands and meaningful projects. Discover opportunities, build experience, and earn while you learn.",
  keywords: [
    "Funngro",
    "teen jobs",
    "student opportunities",
    "freelance projects for students",
    "young talent",
    "brand campaigns",
    "student freelancers",
  ],
  openGraph: {
    title: "Funngro | Real Projects. Real Experience.",
    description:"Connect with real brands, discover meaningful projects, build experience, and earn while you learn.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
