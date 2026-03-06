import type { Metadata } from "next";
import {  Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/general/navbar/Navbar";

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '600', '700'], 
  variable: '--font-poppins',   
});


export const metadata: Metadata = {
  title: "Toushif's Portfolio website",
  description: "Welcomne to my portfolio website. Here you can find all of my projects and experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased bg-slate-950`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
