import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "ShaadiVerse - Where Every Moment, Gift, and Story Finds Its Celebration",
  description: "ShaadiVerse is your all-in-one destination for everything wedding — from photographers to handcrafted gifts to stunning digital invitations. Celebrate love the modern Indian way — beautifully, effortlessly, and together.",
  keywords: ["wedding", "photography", "gifts", "invitations", "Indian wedding", "shaadi"],
  authors: [{ name: "ShaadiVerse" }],
  openGraph: {
    title: "ShaadiVerse - Where Every Moment, Gift, and Story Finds Its Celebration",
    description: "Your all-in-one destination for everything wedding — from photographers to handcrafted gifts to stunning digital invitations.",
    type: "website",
    locale: "en_US",
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
        className={`${inter.variable} ${dmSerifDisplay.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
