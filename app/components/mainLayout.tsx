// components/MainLayout.tsx
'use client'
import React from 'react';
import { usePathname } from 'next/navigation'; 

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  
  const isHomePage = usePathname() === '/';

  return (
    <div id = "backgroundEffect">
    <div className={isHomePage ? '' : 'ml-[39px] mt-[87px] relative scroll-smooth z-10 sm:mr-[39px] md:mr-0'}>
      {children}
    </div>
    </div>
  );
};

export default MainLayout;