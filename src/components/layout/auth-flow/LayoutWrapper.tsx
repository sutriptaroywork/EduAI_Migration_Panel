import { useRouter } from 'next/router';
import { ReactNode } from 'react';

import { LoggedInLayout } from './logged-in-layout';
import { LoggedOutLayout } from './logged-out-layout';
import { WebsiteLayout } from './website-layout';

interface LayoutProps {
  children: ReactNode;
}

export function Layout(props: LayoutProps) {
  const { children } = props;
  const { pathname } = useRouter();

  return (
    <>
      {pathname === '/' ? (
        <WebsiteLayout>{children}</WebsiteLayout>
      ) : (
        <div className='flex h-full min-h-screen w-full bg-gray-05 text-gray-10 '>
          {pathname.startsWith('/flow') ? (
            <LoggedOutLayout>{children}</LoggedOutLayout>
          ) : (
            <LoggedInLayout>{children}</LoggedInLayout>
          )}
        </div>
      )}
    </>
  );
}
