import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Arimo } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import { AnimatePresence } from "framer-motion";



const inter = Arimo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "George Gausden",
  description: "George's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      
      <body className='text-black ml-[5%] mt-[5%] grid grid-cols-6'>
      
          {children}
        
        
        <Navbar />
        
      </body>
    </html>
  );
}
