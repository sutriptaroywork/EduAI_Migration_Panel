import { Button } from '@/ui';
import { ReactNode } from 'react';

interface SButtonProps {
  children: ReactNode;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}
export function SecondaryButton(props: SButtonProps) {
  const { children, size = 'large', className = '' } = props;

  return (
    <Button
      variant='custom'
      className={`${className} group flex items-center justify-center gap-[1.6rem] rounded-full bg-black !p-[.8rem] text-white border-none ring-1 ring-gray-80 hover:bg-gray-100 hover:ring-[2px] transition-colors duration-500 ease-in-out`}
    >
      {children}
    </Button>
  );
}
