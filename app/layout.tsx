import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Terminal to Trading | Learn Algorithmic Trading with Code",
  description: "Go from terminal to trading. Learn to build algorithmic trading systems, analyze markets with Python, and turn your coding skills into trading edge.",
  keywords: ["algorithmic trading", "python trading", "trading bot", "coding", "finance", "stocks", "crypto", "terminal to trading"],
  openGraph: {
    title: "Terminal to Trading | Learn Algorithmic Trading with Code",
    description: "Go from terminal to trading. Learn to build algorithmic trading systems, analyze markets with Python, and turn your coding skills into trading edge.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terminal to Trading | Learn Algorithmic Trading with Code",
    description: "Go from terminal to trading. Learn to build algorithmic trading systems, analyze markets with Python, and turn your coding skills into trading edge.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased bg-zinc-950 text-white`}>
        {children}
      </body>
    </html>
  );
}
