import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dashagriv Aerospace Technology",
  description: "Mission-oriented aerospace brand building next-gen platforms for the stratosphere.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
      </head>
      <body className={`font-body antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
