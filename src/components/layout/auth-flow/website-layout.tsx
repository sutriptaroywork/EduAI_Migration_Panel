import { Fragment, ReactNode } from 'react';
import { WebsiteNavbar } from '../website-nav';

interface LayoutProps {
  children: ReactNode;
}

export function WebsiteLayout(props: LayoutProps) {
  const { children } = props;
  return (
    <Fragment>
      <WebsiteNavbar />
      <main className='bg-black w-full h-full'>{children}</main>
    </Fragment>
  );
}
