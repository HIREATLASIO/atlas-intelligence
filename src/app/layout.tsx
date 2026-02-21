import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Atlas Intelligence — Deploy Your AI Department",
  description: "We build custom AI agents from scratch for your exact business. 24/7 execution. No hiring. No training. No overhead.",
  keywords: ["AI", "automation", "business intelligence", "AI agents", "virtual assistant"],
  openGraph: {
    title: "Atlas Intelligence — Deploy Your AI Department",
    description: "We build custom AI agents from scratch for your exact business. 24/7 execution.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
