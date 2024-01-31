import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Arimo } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

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
      
      <body className='text-black dark:text-white uppercase'>
        <Navbar/>
        <div className="p-5">
        {children}
        </div>
        
        </body>
    </html>
  );
}
