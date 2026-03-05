import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import NavSection from "@/components/sections/NavSection";
import Footer from "@/components/sections/Footer";
import ThemeProvider from "@/components/sections/ThemeProvider";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pixor",
  description:
    "Pixor is a cutting-edge web development company specializing in crafting innovative and user-centric digital experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.className} antialiased`}>
        <ThemeProvider>
          <NavSection />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
