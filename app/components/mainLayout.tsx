// components/MainLayout.tsx
'use client'
import React from 'react';
import { usePathname } from 'next/navigation'; 

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  
  const isHomePage = usePathname() === '/';
  const mobileMessage = `Mobile website in development :-)`

  return (
    <div >
      <div className='md:hidden flex justify-center mx-5 flex-col h-screen'>
        <h1>{mobileMessage}</h1>
      </div>
      <div className='hidden md:block'>
        <div className={isHomePage ? '' : 'sm:ml-[39px] mt-[87px] mb-[87px] relative scroll-smooth z-10 sm:mr-[39px] max-w-screen-xl xl:mx-auto'}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;