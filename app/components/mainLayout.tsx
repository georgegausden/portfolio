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
    <div className={isHomePage ? '' : 'ml-[39px] mt-[87px] relative scroll-smooth'}>
      {children}
    </div>
  );
};

export default MainLayout;