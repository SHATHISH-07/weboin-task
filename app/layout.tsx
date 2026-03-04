import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import NavSection from "@/components/sections/NavSection";
import Footer from "@/components/sections/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Weboin",
  description:
    "Weboin is a cutting-edge web development company specializing in crafting innovative and user-centric digital experiences. With a team of skilled developers, designers, and strategists, Weboin delivers tailored solutions that drive business growth and enhance online presence. From responsive websites to dynamic web applications, Weboin combines creativity with technical expertise to bring your vision to life. Partner with Weboin for seamless, scalable, and impactful web solutions that set you apart in the digital landscape.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} antialiased`}>
        <NavSection />
        {children}
        <Footer />
      </body>
    </html>
  );
}
