import type { Metadata } from "next";
import "./globals.css";
import AnnouncementTicker from "@/components/AnnouncementTicker";

export const metadata: Metadata = {
  title: "Dashagriv Aerospace Technology",
  description:
    "Mission-oriented aerospace brand building next-gen platforms for the stratosphere.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head />
      <body className={`font-body antialiased bg-black text-white `}>
        <AnnouncementTicker />
        {children}
      </body>
    </html>
  );
}
