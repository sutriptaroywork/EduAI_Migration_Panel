import { ReactNode } from 'react';

interface SWProps {
  children: ReactNode;
  className?: string;
  id: string;
}
export function SectionWrapper(props: SWProps) {
  const { children, className = '', id = 'home' } = props;
  return (
    <section
      id={id}
      className={`${className && className} bg-black section w-full h-screen sticky top-0`}
    >
      {children}
    </section>
  );
}
