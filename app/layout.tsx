import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar";
import CoverParticles from "@/components/cover-particles";
import Typer from "@/components/typingAnimation";
import SocialNetwork from "@/components/social-network";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mi-Portfolio",
  description: "Created by Valentino",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <section className="backdrop-blur-sm size-full  h-96">
          <CoverParticles />
          <NavBar />
          <SocialNetwork />
        </section>
        {children}
        </body>
    </html>
  );
}
