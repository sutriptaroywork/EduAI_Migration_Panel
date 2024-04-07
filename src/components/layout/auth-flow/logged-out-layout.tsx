import { ReactNode } from 'react';
import { LoggedOutNavBar } from '../navbar';

interface LayoutProps {
  children: ReactNode;
}

export function LoggedOutLayout(props: LayoutProps) {
  const { children } = props;
  return (
    <>
      <LoggedOutNavBar />
      <div className='relative flex h-full w-full flex-col items-center justify-center'>
        <main className='mt-[6.4rem] flex h-[calc(100vh-6.4rem)]  w-full items-center justify-center overflow-hidden bg-gray-05  '>
          {children}
        </main>
        {/* <Footer /> */}
      </div>
    </>
  );
}
