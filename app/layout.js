// layout.js
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ChatSphere",
  description: "An innovative AI-powered search engine",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-background-light dark:bg-background-dark">
      <body className={inter.className}>
        <div className="bg-background-light dark:bg-background-dark min-h-screen min-w-screen flex flex-col">
          <Navbar />
          {/* <main className="flex-grow flex items-center justify-center">
            {children}
          </main> */}
          <HeroSection/>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
