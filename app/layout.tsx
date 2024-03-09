import Navbar from "./components/navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Arimo } from "next/font/google";
import MainLayout from "./components/mainLayout";


import "./globals.css";

import { AnimatePresence } from "framer-motion";
import PageNavigation from "./components/pageNavigation";






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
      
      <body className='text-black'>
      


        <MainLayout>{children}</MainLayout>
        
      </body>
    </html>
  );
}
