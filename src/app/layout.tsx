import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ 
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aagya Ethics - Where Tradition Meets Modern Elegance",
  description: "Australian-based curated fashion brand specializing in premium kurthas and ethnic wear. Quality, authenticity, and elegance you can trust.",
  keywords: "ethnic wear, kurta, traditional clothing, Australian fashion, curated fashion, premium clothing",
  authors: [{ name: "Aagya Ethics" }],
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "Aagya Ethics - Where Tradition Meets Modern Elegance",
    description: "Premium curated fashion – Elegance you can trust.",
    type: "website",
    locale: "en_AU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased overflow-x-hidden`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
