import { ReactNode } from 'react';
import { LoggedInNavBar } from '../navbar';

interface LayoutProps {
  children: ReactNode;
}

export function LoggedInLayout(props: LayoutProps) {
  const { children } = props;

  return (
    <section className='h-full w-full bg-gray-05 '>
      <LoggedInNavBar />
      <div className='flex'>
        <main
          className={`relative mt-[6.4rem] h-[calc(100vh-6.4rem)] w-full
           flex-1 overflow-auto border-gray-20 bg-white p-[1.6rem]  sm:overflow-x-hidden sm:border-l-[1px]`}
        >
          {children}
        </main>
      </div>
    </section>
  );
}
