import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import AnimatedCursor from "@/components/ui/AnimatedCursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Suyash Gupta | Student Council Candidate",
  description:
    "Vote Suyash Gupta for Student Council. A stronger campus starts with stronger voices. Join the campaign for better student facilities, representation, and community.",
  keywords: [
    "Suyash Gupta",
    "Student Council",
    "College Election",
    "Campus",
    "Student Leader",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <AnimatedCursor />
        {children}
      </body>
    </html>
  );
}
